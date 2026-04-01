"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ease = [0, 0, 0.3, 1] as const;

export default function ActV() {
  const [name, setName] = useState("");
  const router = useRouter();

  function handleBegin(e: React.FormEvent) {
    e.preventDefault();
    // Pass name as query param — /commission page reads it in Phase 4
    const dest = name.trim()
      ? `/commission?name=${encodeURIComponent(name.trim())}`
      : "/commission";
    router.push(dest);
  }

  return (
    <section
      style={{
        background: "var(--ls-void-white)",
        padding: "var(--space-2000) var(--layout-margin)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease }}
        style={{
          maxWidth: "36rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <p
          className="text-label"
          style={{ marginBottom: "var(--space-600)" }}
        >
          Begin a commission
        </p>

        {/* Invitation heading */}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
            lineHeight: 1.12,
            letterSpacing: "0.02em",
            color: "var(--ls-void-black)",
            marginBottom: "var(--space-500)",
          }}
        >
          Your object has not been made yet.
        </h2>

        {/* Body */}
        <p
          className="text-body"
          style={{
            marginBottom: "var(--space-1000)",
            maxWidth: "28rem",
            margin: "0 auto var(--space-1000)",
          }}
        >
          Every commission begins with a conversation about material,
          time, and form. There is no catalogue to browse. There is
          only what you carry, and what can be made from it.
        </p>

        {/* Commission form */}
        <form
          onSubmit={handleBegin}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-400)",
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-label="Your name"
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
              transition: "border-color var(--duration-base) var(--ease-out)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderBottomColor =
                "var(--ls-graphite-skin)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderBottomColor = "var(--border-medium)";
            }}
          />

          <button
            type="submit"
            className="link-pathway"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              fontFamily: "var(--font-sans)",
              marginTop: "var(--space-200)",
            }}
          >
            Begin the conversation
          </button>
        </form>
      </motion.div>
    </section>
  );
}
