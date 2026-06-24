import Button from "@/components/Button";

interface DeliverablesMissionProps {
  items: string[];
  cta: { label: string; href: string };
}

export default function DeliverablesMission({ items, cta }: DeliverablesMissionProps) {
  return (
    <div className="space-y-10">
      <div className="outcomes-ledger">
        <div className="outcomes-ledger-accent" aria-hidden />
        <ul className="outcomes-ledger-list" aria-label="Outcomes we help organizations achieve">
          {items.map((item) => (
            <li key={item} className="outcomes-ledger-item marker-check-badge">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Button href={cta.href} variant="teal">
        {cta.label}
      </Button>
    </div>
  );
}
