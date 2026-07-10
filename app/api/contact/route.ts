import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contactSchema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request schema via Zod
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid form parameters.", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, phone, email, message } = validation.data;
    const apiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.CONTACT_TO_EMAIL || "info@kergix.com";

    // Fallback mode if API key is missing (for local testing without keys)
    if (!apiKey) {
      console.warn("WARNING: RESEND_API_KEY environment variable is missing. Simulating successful form submission.");
      
      // Simulate slow network connection
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      return NextResponse.json({
        message: "Submission simulated successfully (RESEND_API_KEY missing).",
        data: { name, phone, email, message },
      });
    }

    // Call Resend emails API endpoint directly via Fetch
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Kergix Inquiry <onboarding@resend.dev>",
        to: targetEmail,
        subject: `[Kergix Inquiry] - Contact Request from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #00D2F0; border-radius: 8px; background-color: #05070A; color: #F5F9FA;">
            <h2 style="border-bottom: 1px solid rgba(0, 210, 240, 0.3); padding-bottom: 10px; color: #00E6FA; font-family: 'Space Grotesk', sans-serif;">New Project Request</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #A7B4B8;">Name:</td>
                <td style="padding: 8px 0; color: #F5F9FA;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #A7B4B8;">Email:</td>
                <td style="padding: 8px 0; color: #F5F9FA;"><a href="mailto:${email}" style="color: #00D2F0; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #A7B4B8;">Phone:</td>
                <td style="padding: 8px 0; color: #F5F9FA;">${phone || "Not provided"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; border-top: 1px solid rgba(0, 210, 240, 0.1); padding-top: 15px;">
              <h4 style="margin: 0 0 10px 0; color: #A7B4B8;">Message details:</h4>
              <p style="margin: 0; line-height: 1.6; color: #F5F9FA; background-color: #0B0F14; padding: 15px; border-radius: 6px; border: 1px solid rgba(0, 210, 240, 0.05); white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 25px; font-size: 10px; color: #6B7679; text-align: center; border-top: 1px solid rgba(0, 210, 240, 0.1); padding-top: 10px;">
              Sent via Kergix Next.js Automated API System.
            </div>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error response:", errorText);
      return NextResponse.json(
        { message: "Failed to dispatch email via provider." },
        { status: 502 }
      );
    }

    const resData = await resendResponse.json();
    return NextResponse.json({ message: "Form submitted successfully.", id: resData.id });
  } catch (error: any) {
    console.error("Contact API routing error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred during submission." },
      { status: 500 }
    );
  }
}
