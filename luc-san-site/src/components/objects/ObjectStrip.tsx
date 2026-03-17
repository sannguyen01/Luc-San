import type { LucSanObject } from "@/types";

interface ObjectStripProps {
  objects: LucSanObject[];
  tier: string;
}

export function ObjectStrip({ objects, tier }: ObjectStripProps) {
  const filtered = objects.filter((o) => o.tier === tier);

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
      {filtered.map((obj) => (
        <div
          key={obj.id}
          className="flex-shrink-0 w-72 snap-start"
        >
          <div className="aspect-[3/4] bg-[#E8E4DE] mb-3 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-meta text-muted/40">{obj.title}</span>
            </div>
          </div>
          <h4 className="font-serif text-base font-light">{obj.title}</h4>
          <p className="text-xs text-muted mt-1">
            {obj.materials.join(" · ")} — {obj.hours} hours
          </p>
        </div>
      ))}
    </div>
  );
}
