export interface Discipline {
  num: string;
  title: string;
  body: string;
  example: string;
}

interface AtelierDoctrineProps {
  disciplines: readonly Discipline[];
}

export default function AtelierDoctrine({ disciplines }: AtelierDoctrineProps) {
  return (
    <section
      style={{
        background: "var(--ls-void-white)",
        padding: "var(--space-2000) var(--layout-margin)",
      }}
    >
      <div
        className="layout-editorial"
        style={{ maxWidth: "var(--layout-max)", margin: "0 auto" }}
      >
        {/* Left: Nacre Method doctrine */}
        <div>
          <p
            style={{
              fontFamily:    "var(--font-sans)",
              fontSize:      "0.65rem",
              fontWeight:    400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:         "var(--ls-void-black)",
              marginBottom:  "var(--space-300)",
            }}
          >
            The Nacre Method
          </p>
          <p
            className="text-editorial"
            style={{ fontStyle: "italic", marginBottom: "var(--space-600)" }}
          >
            A doctrine of layered revelation.
          </p>
          <p
            className="text-editorial"
            style={{ marginBottom: "var(--space-600)" }}
          >
            Nacre is the aesthetic movement and design school of Lục San.
            It takes its name from the biological process by which a pearl forms —
            not through a single decision, but through the patient deposition
            of successive layers, each one responding to the conditions of the
            previous one, each one invisible until the whole is complete.
          </p>
          <p
            className="text-editorial"
            style={{ marginBottom: "var(--space-800)" }}
          >
            The Nacre method operates by the same logic.
            An object is not designed. It is read.
            The material speaks first. The maker listens last.
            The form is the material&rsquo;s original argument,
            made visible through the minimum necessary intervention.
          </p>

          {/* Three refusals */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-600)" }}>
            {[
              {
                title: "Nacre refuses treated matter.",
                body:  "Any material altered from its geological or biological origin — dyed jade, irradiated stone, artificially nucleated pearl — cannot enter the Nacre vocabulary. Purity is not a moral claim. It is a material fact, verifiable by specific gravity, refraction, and spectroscopic analysis.",
              },
              {
                title: "Nacre refuses prestige hierarchy.",
                body:  "A copper element worth twelve dollars and a gold element worth three hundred are governed by the same criterion: appropriateness to the material conversation they are asked to enter.",
              },
              {
                title: "Nacre refuses seasonal temporality.",
                body:  "Objects are not made for a season. They are designed for what they will become in fifty years. The patina schedule is written before fabrication begins.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <p
                  style={{
                    fontFamily:    "var(--font-sans)",
                    fontSize:      "0.72rem",
                    fontWeight:    400,
                    letterSpacing: "0.04em",
                    color:         "var(--ls-void-black)",
                    marginBottom:  "var(--space-100)",
                  }}
                >
                  {title}
                </p>
                <p className="text-caption" style={{ lineHeight: 1.8 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3 brief principles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-600)",
            paddingTop: "var(--space-200)",
          }}
        >
          {disciplines.map((d) => (
            <div
              key={d.num}
              style={{ display: "flex", gap: "var(--space-400)" }}
            >
              <span
                className="text-label"
                style={{
                  minWidth: "1.6rem",
                  paddingTop: "2px",
                  color: "var(--ls-graphite-skin)",
                }}
              >
                {d.num}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ls-void-black)",
                    marginBottom: "var(--space-100)",
                  }}
                >
                  {d.title}
                </p>
                <p className="text-caption" style={{ lineHeight: 1.7 }}>
                  {d.body.split(".")[0]}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
