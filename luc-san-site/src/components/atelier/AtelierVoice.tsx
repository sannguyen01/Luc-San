import Link from "next/link";

export default function AtelierVoice() {
  return (
    <section
      className="dark-band"
      style={{ padding: "var(--space-2000) var(--layout-margin)" }}
    >
      <div
        style={{
          maxWidth: "50rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          className="text-manifesto dark-band"
          style={{ marginBottom: "var(--space-600)" }}
        >
          &ldquo;The object exists before I touch it. The forty million years
          that made the stone — that is the design. I am just the last
          forty-six hours.&rdquo;
        </p>
        <p
          className="text-label"
          style={{
            color: "var(--ls-slate-haze)",
            marginBottom: "var(--space-1000)",
          }}
        >
          Founder, Nacre School · Lục San Atelier
        </p>
        <Link
          href="/biography/luc-san"
          className="link-pathway"
        >
          Biography of the imaginator
        </Link>
      </div>
    </section>
  );
}
