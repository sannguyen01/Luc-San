"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const inquiryTypes = ["Objects", "Materials", "Spaces", "Wholesale"] as const;

const FIELD_CLASS =
  "w-full border-b border-[var(--border-subtle)] bg-transparent py-3 text-sm text-foreground outline-none focus:border-[var(--ls-graphite-skin)] transition-colors disabled:opacity-40";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div style={{ paddingTop: "var(--space-800)", paddingBottom: "var(--space-800)" }}>
        <p className="font-serif font-light mb-3" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
          Received.
        </p>
        <p className="text-body" style={{ color: "var(--text-secondary)" }}>
          We will respond at a pace that respects your inquiry.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Editorial intro — sets the register before the form begins */}
      <div className="mb-12" style={{ maxWidth: "480px" }}>
        <p
          className="font-serif font-light mb-4 leading-snug"
          style={{
            fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
            color: "var(--text-primary)",
            letterSpacing: "0.01em",
          }}
        >
          Every piece begins with a conversation.
        </p>
        <p className="text-body mb-3" style={{ color: "var(--text-secondary)" }}>
          Whether you are enquiring about an existing object, a material, or something
          that does not yet exist — write plainly about what you need and why.
          We read every message before we reply.
        </p>
        <p className="text-body" style={{ color: "var(--text-tertiary)" }}>
          We respond within five working days. Commissioned work requires
          a longer conversation before any timeline is discussed.
        </p>
      </div>

      <form action={action} className="space-y-8" style={{ maxWidth: "480px" }}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="text-label block mb-3" style={{ color: "var(--text-tertiary)" }}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={isPending}
          className={FIELD_CLASS}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-label block mb-3" style={{ color: "var(--text-tertiary)" }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isPending}
          className={FIELD_CLASS}
        />
      </div>

      {/* Inquiry type */}
      <div>
        <label htmlFor="inquiry" className="text-label block mb-3" style={{ color: "var(--text-tertiary)" }}>
          Regarding
        </label>
        <select
          id="inquiry"
          name="inquiry"
          disabled={isPending}
          className={`${FIELD_CLASS} appearance-none cursor-pointer`}
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
        <label htmlFor="message" className="text-label block mb-3" style={{ color: "var(--text-tertiary)" }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={isPending}
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      {/* Error */}
      {state.status === "error" && (
        <p className="text-body" style={{ color: "var(--ls-graphite-skin)" }}>
          {state.message}
        </p>
      )}

      {/* Submit */}
      <div style={{ paddingTop: "var(--space-200)" }}>
        <button
          type="submit"
          disabled={isPending}
          className="link-pathway cursor-pointer bg-transparent border-none p-0 disabled:opacity-40"
        >
          {isPending ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
    </>
  );
}
