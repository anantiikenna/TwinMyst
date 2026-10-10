"use server";

import { escapeHtml } from "@/lib/escape-html";
import { isRateLimited } from "@/lib/rate-limit";
import { sendEmail } from "@/lib/mailer";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s+\-()]{7,20}$/;

const ALLOWED_SUBJECTS = [
  "General Enquiry",
  "Web Development",
  "Mobile App",
  "E-commerce",
  "UI/UX & Branding",
  "AI & Creative Media",
  "Digital Products",
  "Partnership / White-label",
];

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim().toLowerCase() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const hp = (formData.get("hp_field") as string | null) ?? "";

  if (hp) {
    return { success: true };
  }

  if (isRateLimited(email || "anonymous")) {
    return {
      success: false,
      error: "Too many submissions. Please try again later.",
    };
  }

  if (!name || name.length > 100) {
    return { success: false, error: "Please provide a valid name." };
  }
  if (!email || email.length > 254 || !emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }
  if (phone && !phoneRegex.test(phone)) {
    return { success: false, error: "Please provide a valid phone number." };
  }
  if (!ALLOWED_SUBJECTS.includes(subject)) {
    return { success: false, error: "Please select a valid subject." };
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return {
      success: false,
      error: "Please include a message of at least 10 characters.",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const toEmail = process.env.CONTACT_EMAIL_TO || "twinkmystt@gmail.com";

  const html = `
    <h2>New TwinkMyst enquiry</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
    <p><strong>Subject:</strong> ${safeSubject}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn("[contact] SMTP not configured — logging submission only.");
    console.info(`[contact] ${subject} from ${email}: ${message.slice(0, 200)}`);
    if (process.env.NODE_ENV === "production") {
      return {
        success: false,
        error:
          "The form is temporarily unavailable. Please email twinkmystt@gmail.com directly or message us on WhatsApp.",
      };
    }
    return { success: true };
  }

  try {
    await sendEmail({
      to: toEmail,
      subject: `TwinkMyst enquiry: ${subject}`,
      html,
      replyTo: email,
    });
    return { success: true };
  } catch (err) {
    console.error(
      "[contact] SMTP send failed:",
      err instanceof Error ? err.message : "Unknown error"
    );
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
