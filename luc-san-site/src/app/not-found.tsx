import Link from "next/link";
import { PageContainer } from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <PageContainer>
      <div
        className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
        style={{ minHeight: "60vh", paddingTop: "var(--space-1600)", paddingBottom: "var(--space-1600)" }}
      >
        <p className="text-meta mb-6" style={{ color: "var(--text-tertiary)" }}>
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-light mb-6">
          This object does not exist.
        </h1>
        <p
          className="text-body max-w-sm mb-12 leading-relaxed"
          style={{ color: "var(--text-secondary)", fontSize: "14px" }}
        >
          Like geological formations, some things cannot be found on demand.
          Return to what is here.
        </p>
        <Link href="/objects" className="link-pathway">
          View all objects
        </Link>
      </div>
    </PageContainer>
  );
}
