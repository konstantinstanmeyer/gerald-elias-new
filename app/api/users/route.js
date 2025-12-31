import mongoDBConnection from "@/mongodb/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("oiasoi")

  const { name, email, provider } = await request.json();

  console.log("hello there")

  await mongoDBConnection();

  console.log("2222")

  await User.create({ name, email, provider });

  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}