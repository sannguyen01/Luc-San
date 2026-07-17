"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/Layout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageContainer>
      <div
        className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
        style={{ minHeight: "60vh", paddingTop: "var(--space-1600)", paddingBottom: "var(--space-1600)" }}
      >
        <p className="text-meta mb-6" style={{ color: "var(--text-tertiary)" }}>
          Something went wrong.
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-light mb-6">
          This page could not be rendered.
        </h1>
        <p
          className="text-body max-w-sm mb-12 leading-relaxed"
          style={{ color: "var(--text-secondary)", fontSize: "14px" }}
        >
          An unexpected error occurred. You may try again, or return to what is here.
        </p>
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={reset}
            className="link-pathway cursor-pointer bg-transparent border-none p-0"
          >
            Try again
          </button>
          <Link href="/talismans" className="link-pathway">
            View the collection
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
