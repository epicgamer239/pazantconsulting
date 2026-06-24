interface ApproachPillarsProps {
  subtitle: string;
  approachLead: string;
  pillars: { label: string; desc: string }[];
  closing: string;
}

export default function ApproachPillars({
  subtitle,
  approachLead,
  pillars,
  closing,
}: ApproachPillarsProps) {
  return (
    <div className="space-y-12">
      <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.75]">
        {subtitle}
      </p>

      <div>
        <p className="text-sm font-semibold text-muted-foreground">{approachLead}</p>
        <div className="pillar-grid mt-6 grid sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="pillar-block">
            <h3 className="font-serif text-lg font-semibold leading-snug text-foreground md:text-xl">
              {pillar.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem] md:leading-[1.65]">
              {pillar.desc}
            </p>
          </div>
        ))}
        </div>
      </div>

      <p className="max-w-2xl pt-2 text-pretty text-base leading-relaxed text-foreground md:text-lg">
        {closing}
      </p>
    </div>
  );
}
