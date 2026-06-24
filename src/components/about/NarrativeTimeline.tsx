import { aboutNarrative } from "@/lib/content";

function SpiralConnector({ side }: { side: "left" | "right" }) {
  const path =
    side === "left"
      ? "M 28 0 C 28 18, 4 24, 4 50 C 4 76, 28 82, 28 100"
      : "M 28 0 C 28 18, 52 24, 52 50 C 52 76, 28 82, 28 100";

  const orbit =
    side === "left"
      ? "M 28 8 A 20 20 0 0 0 12 28 A 20 20 0 0 0 28 48"
      : "M 28 8 A 20 20 0 0 1 44 28 A 20 20 0 0 1 28 48";

  return (
    <svg
      className="narrative-spiral"
      viewBox="0 0 56 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        className="narrative-spiral-orbit"
        d={orbit}
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="narrative-spiral-path"
        d={path}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function NarrativeTimeline() {
  return (
    <>
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <linearGradient id="narrative-gold-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-gold-light)" />
            <stop offset="45%" stopColor="var(--brand-gold)" />
            <stop offset="100%" stopColor="var(--teal)" />
          </linearGradient>
        </defs>
      </svg>

      <ol className="narrative-timeline max-w-4xl" aria-label="Narrative positioning">
      {aboutNarrative.sections.map((section, index) => {
        const indexLabel = String(index + 1).padStart(2, "0");
        const isLast = index === aboutNarrative.sections.length - 1;

        return (
          <li key={section.label} className="narrative-timeline-item">
            <div className="narrative-timeline-track">
              <div className="narrative-hoop" aria-hidden>
                <svg className="narrative-hoop-ring" viewBox="0 0 56 56" aria-hidden>
                  <circle
                    className="narrative-hoop-ring-outer"
                    cx="28"
                    cy="28"
                    r="25"
                  />
                  <circle
                    className="narrative-hoop-ring-inner"
                    cx="28"
                    cy="28"
                    r="19"
                  />
                  <path
                    className="narrative-hoop-spiral"
                    d={
                      index % 2 === 0
                        ? "M 44 16 A 22 22 0 1 0 16 44"
                        : "M 12 16 A 22 22 0 1 1 40 44"
                    }
                  />
                </svg>
                <span className="narrative-hoop-index">{indexLabel}</span>
              </div>
              {!isLast && <SpiralConnector side={index % 2 === 0 ? "left" : "right"} />}
            </div>

            <article className="narrative-timeline-content narrative-timeline-panel">
              <h3 className="font-serif text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-snug text-foreground">
                {section.label}
              </h3>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem] md:leading-[1.7]">
                {section.text}
              </p>
            </article>
          </li>
        );
      })}
      </ol>
    </>
  );
}
