"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const inquiryTypes = ["Objects", "Materials", "Spaces", "Wholesale"] as const;

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-xl font-light mb-4">
          Received.
        </p>
        <p className="text-muted text-sm">
          We will respond at a pace that respects your inquiry.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-8" style={{ maxWidth: "480px" }}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="text-meta block mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={isPending}
          className="w-full border-b border-[var(--border-subtle)] bg-transparent py-2 text-sm text-foreground outline-none focus:border-[var(--accent-earth)] transition-colors disabled:opacity-50"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-meta block mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isPending}
          className="w-full border-b border-[var(--border-subtle)] bg-transparent py-2 text-sm text-foreground outline-none focus:border-[var(--accent-earth)] transition-colors disabled:opacity-50"
        />
      </div>

      {/* Inquiry type */}
      <div>
        <label htmlFor="inquiry" className="text-meta block mb-2">
          Regarding
        </label>
        <select
          id="inquiry"
          name="inquiry"
          disabled={isPending}
          className="w-full border-b border-[var(--border-subtle)] bg-transparent py-2 text-sm text-foreground outline-none focus:border-[var(--accent-earth)] transition-colors appearance-none cursor-pointer disabled:opacity-50"
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-meta block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          className="w-full border-b border-[var(--border-subtle)] bg-transparent py-2 text-sm text-foreground outline-none focus:border-[var(--accent-earth)] transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {/* Error message */}
      {state.status === "error" && (
        <p className="text-sm" style={{ color: "var(--accent-earth)" }}>
          {state.message}
        </p>
      )}

      {/* Submit — minimal, text-like */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="link-pathway cursor-pointer bg-transparent border-none p-0 disabled:opacity-50"
        >
          {isPending ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
