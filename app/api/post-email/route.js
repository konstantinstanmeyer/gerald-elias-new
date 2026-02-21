import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";

const rateLimitMap = new Map();

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_SUBMIT_TIME_MS = 3000; // 3 seconds minimum between load and submit

function isRateLimited(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { windowStart: now, count: 1 });
        return false;
    }

    entry.count += 1;

    if (entry.count > MAX_REQUESTS_PER_WINDOW) {
        return true;
    }

    return false;
}

setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitMap) {
        if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
            rateLimitMap.delete(ip);
        }
    }
}, RATE_LIMIT_WINDOW_MS);

export async function POST(req) {
    try {
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { message: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const data = await req.json();

        if (data.website) {
            // Return fake success so a bot thinks it worked
            return NextResponse.json({ message: "success" }, { status: 200 });
        }

        if (data.formLoadedAt && data.submittedAt) {
            const elapsed = data.submittedAt - data.formLoadedAt;
            if (elapsed < MIN_SUBMIT_TIME_MS) {
                return NextResponse.json({ message: "success" }, { status: 200 });
            }
        }

        if (!data.name || !data.email || !data.message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { message: "Invalid email address" },
                { status: 400 }
            );
        }

        const htmlData = `
            <h2>CONTACT FORM SUBMISSION</h2>
            <h4>Name:</h4>
            <p>${data.name}</p>
            <h4>Email:</h4>
            <p>${data.email}</p>
            <h4>Phone Number:</h4>
            <p>${data.phoneNumber || 'N/A'}</p>
            <h4>Message:</h4>
            <p>${data.message}</p>
        `;

        const response = await transporter.sendMail({
            ...mailOptions,
            subject: "Contact Submission",
            html: htmlData,
        });

        if (response) {
            return NextResponse.json({ message: "success" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "failure" }, { status: 500 });
        }
    } catch (e) {
        console.error("Email route error:", e);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}