import { FieldLabel } from "@/components/ContentCard";

interface StrengthGroup {
  label: string;
  points: string[];
}

interface ServicesWhyPanelProps {
  lead: string;
  groups: StrengthGroup[];
}

export default function ServicesWhyPanel({ lead, groups }: ServicesWhyPanelProps) {
  const [primary, secondary] = groups;

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="rounded-lg border border-border bg-primary p-6 text-primary-foreground md:p-8 lg:col-span-5 lg:row-span-2">
        <p className="font-serif text-[clamp(1.25rem,2.25vw,1.625rem)] font-semibold leading-snug">
          {lead}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/80">
          Executive-level clarity grounded in federal, prime-contractor, and organizational
          effectiveness experience.
        </p>
      </div>

      {primary && (
        <div className="panel p-6 md:p-7 lg:col-span-7">
          <FieldLabel>{primary.label}</FieldLabel>
          <ul className="mt-4 space-y-3">
            {primary.points.map((point) => (
              <li key={point} className="text-sm leading-relaxed text-foreground md:text-[0.9375rem]">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {secondary && (
        <div className="panel p-6 md:p-7 lg:col-span-7">
          <FieldLabel>{secondary.label}</FieldLabel>
          <ul className="mt-4 space-y-3">
            {secondary.points.map((point) => (
              <li key={point} className="text-sm leading-relaxed text-foreground md:text-[0.9375rem]">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
