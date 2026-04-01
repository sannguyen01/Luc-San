import type { Talisman } from "@/types";

interface Props {
  talisman: Talisman;
}

const TIER_INDEX: Record<string, string> = {
  Elemental:   "01",
  Composed:    "02",
  Complex:     "03",
  Commissioned:"04",
};

interface DataRowProps {
  label: string;
  value: string | string[];
}

function DataRow({ label, value }: DataRowProps) {
  return (
    <div
      className="flex justify-between py-4"
      style={{ borderBottom: "1px solid var(--border-subtle)" }}
    >
      <dt className="text-meta" style={{ color: "var(--text-tertiary)", flexShrink: 0, paddingRight: "var(--space-400)" }}>
        {label}
      </dt>
      <dd className="text-right">
        {Array.isArray(value) ? (
          value.map((v) => (
            <span
              key={v}
              className="block text-meta"
              style={{ color: "var(--text-secondary)", textTransform: "none", letterSpacing: "0.04em" }}
            >
              {v}
            </span>
          ))
        ) : (
          <span className="text-meta" style={{ color: "var(--text-secondary)", textTransform: "none", letterSpacing: "0.04em" }}>
            {value}
          </span>
        )}
      </dd>
    </div>
  );
}

export function GeologicalDataPanel({ talisman }: Props) {
  return (
    <div style={{ position: "sticky", top: "88px" }}>

      {/* Tier indicator */}
      <p className="text-label mb-5" style={{ color: "var(--text-tertiary)" }}>
        {TIER_INDEX[talisman.tier]} · {talisman.tier}
      </p>

      {/* Title */}
      <h1
        className="font-serif font-light"
        style={{
          fontSize:      "clamp(1.6rem, 2.5vw, 2.4rem)",
          lineHeight:    1.15,
          letterSpacing: "0.03em",
          color:         "var(--text-primary)",
          marginBottom:  "var(--space-600)",
        }}
      >
        {talisman.title}
      </h1>

      {/* Rule */}
      <div style={{ width: "2rem", height: "1px", background: "var(--border-medium)", marginBottom: "var(--space-600)" }} />

      {/* Data table */}
      <dl style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <DataRow label="Era"            value={talisman.era} />
        <DataRow label="Provenance"     value={talisman.provenance} />
        <DataRow label="Materials"      value={talisman.materials} />
        <DataRow label="Handwork"       value={`${talisman.hours} hours`} />
        <DataRow label="Authentication" value={talisman.authentication} />
      </dl>

    </div>
  );
}
