import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, productInterest, message } = body;

        // Validate input (basic check)
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        // Note: In a real app, use environment variables for credentials
        const transporter = nodemailer.createTransport({
            host: "smtp.example.com", // Replace with real SMTP
            port: 587,
            secure: false,
            auth: {
                user: "user@example.com",
                pass: "password",
            },
        });

        // Simulate email sending (logging to console for demo)
        console.log("--- New Contact Form Submission ---");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Product: ${productInterest}`);
        console.log(`Message: ${message}`);
        console.log("-----------------------------------");

        // Uncomment to actually send email if credentials are provided
        /*
        await transporter.sendMail({
          from: '"Emperor6inch Web" <noreply@emperor6inch.com>',
          to: "info@emperor6inch.com",
          subject: `New Inquiry: ${productInterest} - ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Product Interest: ${productInterest}
            
            Message:
            ${message}
          `,
        });
        */

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
