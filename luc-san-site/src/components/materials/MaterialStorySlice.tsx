import type { Material } from "@/types";

interface MaterialStorySliceProps {
  material: Material;
  index: number;
}

export function MaterialStorySlice({ material, index }: MaterialStorySliceProps) {
  const isReversed = index % 2 === 1;

  return (
    <article className="border-t border-[var(--border-subtle)] py-12 md:py-20 reveal">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ${
          isReversed ? "md:[direction:rtl] md:*:[direction:ltr]" : ""
        }`}
      >
        {/* Image placeholder */}
        <div className="aspect-[4/5] bg-[#E8E4DE] overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-meta text-muted/40">{material.name}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-2xl md:text-3xl font-light mb-6">
            {material.name}
          </h3>

          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-meta mb-1">Formation</dt>
              <dd className="text-foreground">{material.formation}</dd>
            </div>
            <div>
              <dt className="text-meta mb-1">Epoch</dt>
              <dd className="text-foreground">{material.epoch}</dd>
            </div>
            <div>
              <dt className="text-meta mb-1">Key Property</dt>
              <dd className="text-foreground">{material.property}</dd>
            </div>
          </dl>

          <div className="divider !mx-0 !my-6" />

          <p className="text-muted text-sm leading-relaxed italic">
            {material.temporal}
          </p>
        </div>
      </div>
    </article>
  );
}
