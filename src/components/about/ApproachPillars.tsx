interface ApproachPillarsProps {
  items: { label: string; desc: string }[];
}

export default function ApproachPillars({ items }: ApproachPillarsProps) {
  const [featured, ...rest] = items;

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
      <div className="lg:pr-6">
        <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-snug text-foreground">
          {featured.label}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.desc}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {rest.map((item) => (
          <div key={item.label} className="border-t border-border pt-5">
            <h3 className="font-semibold text-foreground">{item.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
