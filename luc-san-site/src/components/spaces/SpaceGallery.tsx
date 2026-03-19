const encounters = [
  {
    title: "Material Gallery Session",
    description:
      "Handle raw materials. Compare nacre thickness. Feel the difference between air-dried and kiln-dried wood. Forty-five minutes, by appointment.",
  },
  {
    title: "Silent Supper",
    description:
      "A shared meal in the studio with six keepers. Objects on the table are conversation starters. No presentations, no selling. The materials speak.",
  },
  {
    title: "Making Meditation",
    description:
      "Watch an artisan work for ninety minutes. No narration unless requested. The rhythm of handwork is the content.",
  },
];

export function SpaceGallery() {
  return (
    <section>
      {/* Space overview image pair */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 md:mb-24 reveal">
        <div className="aspect-[4/3] bg-[#E8E4DE] flex items-center justify-center">
          <span className="text-meta text-muted/40">Empty table, waiting</span>
        </div>
        <div className="aspect-[4/3] bg-[#E8E4DE] flex items-center justify-center">
          <span className="text-meta text-muted/40">Hand handling material</span>
        </div>
      </div>

      {/* Encounter types */}
      <div className="space-y-0">
        {encounters.map((encounter) => (
          <article
            key={encounter.title}
            className="border-t border-[var(--border-subtle)] py-10 md:py-14 reveal"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 items-start">
              <h3 className="font-serif font-light">
                {encounter.title}
              </h3>
              <p className="text-body max-w-lg" style={{ color: "var(--text-secondary)" }}>
                {encounter.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
