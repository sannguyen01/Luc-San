import Link from "next/link";
import type { LucSanObject } from "@/types";

const tierOrder = ["Elemental", "Composed", "Complex", "Commissioned"] as const;

const tierMeta: Record<string, { hours: string; description: string }> = {
  Elemental:    { hours: "8–25 hrs",    description: "The entry into material consciousness. Foundational forms, singular materials." },
  Composed:     { hours: "25–60 hrs",   description: "Multiple materials in dialogue. Technique layered upon technique." },
  Complex:      { hours: "80–180 hrs",  description: "Objects requiring months of patient making. Structures that endure." },
  Commissioned: { hours: "120–400+ hrs",description: "Begins with a conversation. Ends with a companion for life." },
};

/** Subtle neutral shift per tier — darker = more complex */
const tierBg: Record<string, string> = {
  Elemental:    "var(--bg-warm)",
  Composed:     "var(--bg-cream)",
  Complex:      "var(--bg-card)",
  Commissioned: "#E0D9CF",
};

export function TierBands({ objects }: { objects: LucSanObject[] }) {
  return (
    <div>
      {tierOrder.map((tier, tierIndex) => {
        const tierObjects = objects.filter((o) => o.tier === tier);
        if (!tierObjects.length) return null;
        const meta = tierMeta[tier];

        return (
          <div
            key={tier}
            className="border-t border-[var(--border-subtle)] -mx-6 md:-mx-12 px-6 md:px-12"
            style={{
              paddingTop: "var(--space-800)",
              paddingBottom: "var(--space-800)",
              backgroundColor: tierBg[tier],
              transition: "background-color var(--duration-slow) var(--ease-out)",
            }}
          >
            {/* Tier header */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 mb-10">
              <div>
                <p className="text-meta mb-2" style={{ color: "var(--text-tertiary)" }}>
                  0{tierIndex + 1}
                </p>
                <h3 className="font-serif font-light">{tier}</h3>
                <p className="text-meta mt-1" style={{ color: "var(--text-secondary)" }}>
                  {meta.hours}
                </p>
              </div>
              <p className="text-body max-w-md self-end" style={{ color: "var(--text-secondary)" }}>
                {meta.description}
              </p>
            </div>

            {/* Object grid — featured first (2-col, landscape), rest portrait 2:3 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
              {tierObjects.map((obj, objIndex) => {
                const isFeatured = objIndex === 0;
                return (
                <Link
                  key={obj.id}
                  href={`/objects/${obj.id}`}
                  className={`reveal group block ${isFeatured ? "col-span-2" : ""}`}
                >
                  {/* Image — featured: landscape 3:2 | standard: portrait 2:3 */}
                  <div
                    className="relative overflow-hidden img-skeleton mb-4"
                    style={{ aspectRatio: isFeatured ? "3/2" : "2/3" }}
                  >
                    {/* Hover overlay — geological first sentence + hours (info-first interaction) */}
                    <div
                      className="tile-overlay absolute inset-0 flex flex-col justify-end p-4"
                      style={{
                        background: "linear-gradient(to top, var(--ls-void-black, #111111) 0%, transparent 65%)",
                        opacity: 0,
                        transition: "opacity var(--duration-base) var(--ease-out)",
                      }}
                    >
                      <p
                        className="text-meta mb-1 leading-snug"
                        style={{ color: "var(--ls-void-white)", fontSize: "11px", maxWidth: "90%" }}
                      >
                        {obj.copy.split(".")[0]}.
                      </p>
                      <p className="text-meta" style={{ color: "var(--ls-slate-haze)", fontSize: "10px" }}>
                        {obj.hours} hrs handwork
                      </p>
                    </div>

                    {/* Tier label — fades out on hover */}
                    <div
                      className="tile-label absolute inset-0 flex items-end p-4"
                      style={{
                        transition: "opacity var(--duration-base) var(--ease-out)",
                      }}
                    >
                      <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
                        {isFeatured ? "Featured" : obj.tier}
                      </span>
                    </div>
                  </div>

                  {/* Info — featured title slightly larger */}
                  <h4 className="font-serif font-light leading-tight mb-1">
                    {obj.title}
                  </h4>
                  <p className="text-meta mb-2" style={{ color: "var(--text-tertiary)" }}>
                    {obj.hours} hours · {obj.materials.join(", ")}
                  </p>
                  <p className="text-body text-xs leading-relaxed" style={{ fontSize: "13px" }}>
                    {obj.copy}
                  </p>
                </Link>
              );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
