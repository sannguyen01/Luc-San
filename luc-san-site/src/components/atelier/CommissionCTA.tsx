import Link from "next/link";

export default function CommissionCTA() {
  return (
    <section
      style={{
        background: "var(--ls-void-white)",
        padding: "var(--space-2000) var(--layout-margin)",
        textAlign: "center",
      }}
    >
      <p
        className="text-label"
        style={{ marginBottom: "var(--space-600)" }}
      >
        Begin a commission
      </p>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 3vw, 3rem)",
          lineHeight: 1.12,
          letterSpacing: "0.02em",
          color: "var(--ls-void-black)",
          marginBottom: "var(--space-500)",
        }}
      >
        Your object has not been made yet.
      </h2>
      <p
        className="text-body"
        style={{
          maxWidth: "26rem",
          margin: "0 auto var(--space-800)",
          lineHeight: 1.9,
        }}
      >
        There is no catalogue to browse. There is only what you carry,
        and what can be made from it.
      </p>
      <Link href="/commission" className="link-pathway">
        Begin the conversation
      </Link>
    </section>
  );
}
