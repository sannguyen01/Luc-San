"use client";

import { useActionState } from "react";
import { submitAcquisitionForm } from "@/app/talismans/actions";

interface Props {
  talismanId:    string;
  talismanTitle: string;
}

const INITIAL: { success: boolean; error: string | null } = { success: false, error: null };

export function AcquisitionForm({ talismanId, talismanTitle }: Props) {
  const [state, formAction, isPending] = useActionState(submitAcquisitionForm, INITIAL);

  if (state.success) {
    return (
      <div style={{ paddingTop: "var(--space-800)", paddingBottom: "var(--space-800)" }}>
        <p className="text-label mb-5" style={{ color: "var(--text-tertiary)" }}>
          Conversation begun
        </p>
        <p
          className="font-serif font-light"
          style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)", color: "var(--text-primary)", letterSpacing: "0.02em" }}
        >
          We will be in touch.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "36rem" }}>

      <p className="text-label mb-6" style={{ color: "var(--text-tertiary)" }}>
        Begin a conversation
      </p>

      <h2
        className="font-serif font-light"
        style={{
          fontSize:      "clamp(1.3rem, 2vw, 1.8rem)",
          lineHeight:    1.2,
          letterSpacing: "0.02em",
          marginBottom:  "var(--space-600)",
          color:         "var(--text-primary)",
        }}
      >
        Enquire about {talismanTitle}
      </h2>

      <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
        <input type="hidden" name="talismanId"    value={talismanId} />
        <input type="hidden" name="talismanTitle" value={talismanTitle} />

        {/* Name */}
        <div>
          <label
            htmlFor="acq-name"
            className="text-label"
            style={{ display: "block", color: "var(--text-tertiary)", marginBottom: "var(--space-200)" }}
          >
            Your name
          </label>
          <input
            id="acq-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            style={{
              width:         "100%",
              padding:       "12px 0",
              borderTop:     "none",
              borderLeft:    "none",
              borderRight:   "none",
              borderBottom:  "1px solid var(--border-medium)",
              fontSize:      "15px",
              fontFamily:    "var(--font-sans)",
              letterSpacing: "0.02em",
            }}
          />
        </div>

        {/* Contact */}
        <div>
          <label
            htmlFor="acq-contact"
            className="text-label"
            style={{ display: "block", color: "var(--text-tertiary)", marginBottom: "var(--space-200)" }}
          >
            Email or phone
          </label>
          <input
            id="acq-contact"
            name="contact"
            type="text"
            required
            autoComplete="email"
            style={{
              width:         "100%",
              padding:       "12px 0",
              borderTop:     "none",
              borderLeft:    "none",
              borderRight:   "none",
              borderBottom:  "1px solid var(--border-medium)",
              fontSize:      "15px",
              fontFamily:    "var(--font-sans)",
              letterSpacing: "0.02em",
            }}
          />
        </div>

        {/* Optional note */}
        <div>
          <label
            htmlFor="acq-note"
            className="text-label"
            style={{ display: "block", color: "var(--text-tertiary)", marginBottom: "var(--space-200)" }}
          >
            What draws you to this object? <span style={{ fontStyle: "italic", textTransform: "none" }}>(optional)</span>
          </label>
          <textarea
            id="acq-note"
            name="note"
            rows={3}
            style={{
              width:         "100%",
              padding:       "12px 0",
              borderTop:     "none",
              borderLeft:    "none",
              borderRight:   "none",
              borderBottom:  "1px solid var(--border-medium)",
              fontSize:      "15px",
              fontFamily:    "var(--font-sans)",
              letterSpacing: "0.02em",
              resize:        "none",
            }}
          />
        </div>

        {/* Error */}
        {state.error && (
          <p className="text-caption" style={{ color: "var(--ls-graphite-skin)" }}>
            {state.error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="link-pathway"
          style={{
            alignSelf:  "flex-start",
            background: "none",
            border:     "none",
            padding:    "0 0 4px",
            cursor:     isPending ? "default" : "none",
            opacity:    isPending ? 0.5 : 1,
            transition: "opacity 200ms",
          }}
        >
          {isPending ? "Sending…" : "Begin a conversation"}
        </button>

      </form>
    </div>
  );
}
