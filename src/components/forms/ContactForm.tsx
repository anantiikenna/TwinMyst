"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const SUBJECTS = [
  "General Enquiry",
  "Web Development",
  "Mobile App",
  "E-commerce",
  "UI/UX & Branding",
  "AI & Creative Media",
  "Digital Products",
  "Partnership / White-label",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData: FormData): string | null {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || name.length > 100) return "Please provide a valid name.";
  if (!email || email.length > 254 || !EMAIL_REGEX.test(email))
    return "Please provide a valid email address.";
  if (!subject) return "Please select a subject.";
  if (!message || message.length < 10)
    return "Please include a message of at least 10 characters.";
  return null;
}

async function postToNetlifyForms(formData: FormData): Promise<boolean> {
  try {
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMsg("");

    if (formData.get("hp_field")) {
      setStatus("success");
      return;
    }

    const validationError = validate(formData);
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }

    if (await postToNetlifyForms(formData)) {
      setStatus("success");
      return;
    }

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setErrorMsg(result.error || "There was an error.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("There was an error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="bg-blue-soft border border-blue/40 text-ink p-8 rounded-xl text-center"
        role="status"
      >
        <h3 className="text-xl font-semibold">Message Sent!</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thank you for reaching out. We&apos;ll reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-blue mt-6"
        >
          Send Another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-line bg-surface text-ink text-sm focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue";

  return (
    <form action={handleSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden" aria-hidden="true">
        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={20}
            autoComplete="tel"
            className={inputClass}
            placeholder="+234 ..."
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1">
            Subject *
          </label>
          <select id="subject" name="subject" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={inputClass}
          placeholder="Tell us about your project, timeline and budget range..."
        />
      </div>

      {status === "error" && (
        <div className="text-red-400 text-sm font-semibold" role="alert">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-blue w-full disabled:opacity-60"
      >
        {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
      </button>

      <p className="text-xs text-ink-soft">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline text-blue">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="underline text-blue">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}
