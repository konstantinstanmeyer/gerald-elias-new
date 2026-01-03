# Gerald Elias' Official Website

A Next.js-based website showcasing the work, history, and books of author Gerald Elias. Visit the live site at [mysteriesandmusic.com](https://www.mysteriesandmusic.com/biography).

## Technology Stack

### Framework
- **Next.js (App Router)** – Leverages file-based routing, server components, and static rendering for optimal performance and SEO

### Database
- **MongoDB with Mongoose ODM** – Document-based storage provides flexibility for evolving page structures based on client requirements
- **MongoDB Atlas** – Cloud-hosted database enables discussion comments management through both client interface and backend administration

### Content Management
- **Markdown/MDX** – Post content utilizes MDX (introduced in Next.js 13.2) for seamless integration of rich text formatting and interactive components

### Email & Communications
- **Nodemailer** – Automatically processes, formats, and delivers contact form submissions to the client's email address
- **Google Apps Script** – Newsletter signups are routed to a private Google Sheets document, enabling direct audience engagement and personalized communication

## Rendering Strategy
- **Static Generation** – Pages are statically generated at build time across nearly all components, minimizing client-side JavaScript
- **Client Components** – Reserved exclusively for interactive UI elements and third-party integrations (e.g., next-auth) where client-side rendering is required

## About Gerald Elias

Gerald Elias is an accomplished author and musician. Learn more about his work and biography at [mysteriesandmusic.com](https://www.mysteriesandmusic.com/biography).