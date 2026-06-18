interface ApproachPillarsProps {
  items: { label: string; desc: string }[];
}

export default function ApproachPillars({ items }: ApproachPillarsProps) {
  const [featured, ...rest] = items;

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
      <div className="lg:pr-6">
        <p className="font-serif text-[clamp(1.625rem,2.75vw,2.25rem)] font-semibold leading-snug text-foreground">
          {featured.label}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:leading-[1.7]">
          {featured.desc}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {rest.map((item) => (
          <div key={item.label} className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
