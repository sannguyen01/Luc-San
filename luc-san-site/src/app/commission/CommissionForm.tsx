"use client";

import { useActionState } from "react";
import { submitCommission } from "./actions";

const initialState = { success: false, error: null };

interface Props {
  initialName: string;
}

export function CommissionForm({ initialName }: Props) {
  const [state, action, pending] = useActionState(submitCommission, initialState);

  if (state.success) {
    return (
      <div style={{ textAlign: "center", padding: "var(--space-800) 0" }}>
        <p className="text-label" style={{ marginBottom: "var(--space-300)" }}>
          Received
        </p>
        <p className="text-body" style={{ maxWidth: "28rem", margin: "0 auto" }}>
          A response will come from{" "}
          <span style={{ color: "var(--ls-void-black)" }}>
            studio@lucsan.com
          </span>{" "}
          within three working days.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-500)",
        width: "100%",
      }}
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        defaultValue={initialName}
        placeholder="Your name"
        required
        style={{
          width: "100%",
          maxWidth: "320px",
          padding: "var(--space-300) 0",
          border: "none",
          borderBottom: "1px solid var(--border-medium)",
          background: "transparent",
          fontFamily: "var(--font-sans)",
          fontSize: "0.85rem",
          fontWeight: 300,
          letterSpacing: "0.06em",
          color: "var(--ls-void-black)",
          textAlign: "center",
          outline: "none",
        }}
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Tell us something about what you carry — a material, a memory, a form you have been thinking about."
        required
        rows={5}
        style={{
          width: "100%",
          maxWidth: "480px",
          padding: "var(--space-300)",
          border: "1px solid var(--border-medium)",
          background: "transparent",
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          fontWeight: 300,
          letterSpacing: "0.04em",
          lineHeight: 1.8,
          color: "var(--ls-void-black)",
          outline: "none",
          resize: "vertical",
        }}
      />

      {state.error && (
        <p
          className="text-caption"
          style={{ color: "var(--ls-graphite-skin)" }}
        >
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="link-pathway"
        style={{
          background: "none",
          border: "none",
          cursor: pending ? "wait" : "pointer",
          padding: "0",
          fontFamily: "var(--font-sans)",
          marginTop: "var(--space-200)",
          opacity: pending ? 0.5 : 1,
          transition: "opacity var(--duration-base) var(--ease-out)",
        }}
      >
        {pending ? "Sending…" : "Begin the conversation"}
      </button>
    </form>
  );
}
