import Button from "@/components/Button";

interface DeliverablesMissionProps {
  items: string[];
}

export default function DeliverablesMission({ items }: DeliverablesMissionProps) {
  return (
    <div className="panel p-6 md:p-10">
      <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
        What clients build with us
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Institutional maturity across governance, BD, compliance, and alignment — the
        infrastructure behind sustainable federal growth.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground md:text-[0.9375rem]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-10 border-t border-border pt-8">
        <Button href="/services" variant="teal">
          Explore Our Services
        </Button>
      </div>
    </div>
  );
}
