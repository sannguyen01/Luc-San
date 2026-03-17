import type { LucSanObject } from "@/types";

const tierOrder = ["Elemental", "Composed", "Complex", "Commissioned"] as const;

const tierMeta: Record<string, { hours: string; description: string }> = {
  Elemental:   { hours: "8–25 hrs", description: "The entry into material consciousness. Foundational forms, singular materials." },
  Composed:    { hours: "25–60 hrs", description: "Multiple materials in dialogue. Technique layered upon technique." },
  Complex:     { hours: "80–180 hrs", description: "Objects requiring months of patient making. Structures that endure." },
  Commissioned:{ hours: "120–400+ hrs", description: "Begins with a conversation. Ends with a companion for life." },
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
            className="border-t border-[var(--border-subtle)]"
            style={{ paddingTop: "var(--space-800)", paddingBottom: "var(--space-800)" }}
          >
            {/* Tier header */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 mb-10">
              <div>
                <p className="text-meta mb-2" style={{ color: "var(--text-tertiary)" }}>
                  0{tierIndex + 1}
                </p>
                <h3 className="font-serif text-2xl font-light">{tier}</h3>
                <p className="text-meta mt-1" style={{ color: "var(--text-secondary)" }}>
                  {meta.hours}
                </p>
              </div>
              <p className="text-body max-w-md self-end" style={{ color: "var(--text-secondary)" }}>
                {meta.description}
              </p>
            </div>

            {/* Object grid — 2:3 portrait tiles */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
              {tierObjects.map((obj) => (
                <article key={obj.id} className="reveal group cursor-pointer">
                  {/* Image — 2:3 portrait (Loewe ratio) + skeleton */}
                  <div
                    className="relative overflow-hidden img-skeleton mb-4"
                    style={{ aspectRatio: "2/3" }}
                  >
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
                        {obj.tier}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="font-serif text-lg font-light leading-tight mb-1">
                    {obj.title}
                  </h4>
                  <p className="text-meta mb-2" style={{ color: "var(--text-tertiary)" }}>
                    {obj.hours} hours · {obj.materials.join(", ")}
                  </p>
                  <p className="text-body text-xs leading-relaxed" style={{ fontSize: "13px" }}>
                    {obj.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
