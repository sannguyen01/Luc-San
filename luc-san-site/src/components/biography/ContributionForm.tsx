"use client";

import { useActionState } from "react";
import { submitContribution } from "@/app/biography/[id]/actions";

const initialState = { success: false, error: null };

interface Props {
  biographyId: string;
}

export function ContributionForm({ biographyId }: Props) {
  const [state, action, pending] = useActionState(
    submitContribution,
    initialState
  );

  if (state.success) {
    return (
      <div>
        <p className="text-label" style={{ marginBottom: "var(--space-300)" }}>
          Received
        </p>
        <p className="text-body" style={{ maxWidth: "32rem" }}>
          Your reflection has been noted. If it is included in the living
          document, you will receive acknowledgement at the address you provided.
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
        gap: "var(--space-500)",
      }}
    >
      <input type="hidden" name="biographyId" value={biographyId} />

      {/* Author */}
      <div>
        <label
          htmlFor="contribution-author"
          className="text-label"
          style={{ display: "block", marginBottom: "var(--space-200)" }}
        >
          Your name
        </label>
        <input
          id="contribution-author"
          type="text"
          name="author"
          required
          placeholder="How should you be attributed?"
          style={{
            width: "100%",
            padding: "var(--space-300)",
            border: "1px solid var(--border-medium)",
            background: "transparent",
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            fontWeight: 300,
            letterSpacing: "0.04em",
            color: "var(--ls-void-black)",
            outline: "none",
          }}
        />
      </div>

      {/* Reflection */}
      <div>
        <label
          htmlFor="contribution-text"
          className="text-label"
          style={{ display: "block", marginBottom: "var(--space-200)" }}
        >
          Your reflection
        </label>
        <textarea
          id="contribution-text"
          name="text"
          required
          rows={5}
          placeholder="What did working with these objects teach you? What did you observe?"
          style={{
            width: "100%",
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
      </div>

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
          alignSelf: "flex-start",
          opacity: pending ? 0.5 : 1,
          transition: "opacity var(--duration-base) var(--ease-out)",
        }}
      >
        {pending ? "Sending…" : "Submit reflection"}
      </button>
    </form>
  );
}
