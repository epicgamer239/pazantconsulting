import { ContentCard, CardDivider, FieldLabel } from "@/components/ContentCard";

interface StrengthGroup {
  label: string;
  points: string[];
}

interface StrengthsBriefProps {
  lead: string;
  groups: StrengthGroup[];
  supporting?: string;
}

export default function StrengthsBrief({ lead, groups, supporting }: StrengthsBriefProps) {
  return (
    <ContentCard padding="none">
      <div className="px-6 py-8 md:px-10 md:py-10">
        <span className="font-serif text-4xl leading-none text-teal/30" aria-hidden>
          &ldquo;
        </span>
        <blockquote>
          <p className="mt-2 max-w-3xl font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-snug text-foreground">
            {lead}
          </p>
          {supporting && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {supporting}
            </p>
          )}
        </blockquote>
      </div>

      {groups.map((group) => (
        <div key={group.label}>
          <CardDivider />
          <div className="px-6 py-5 md:px-8 md:py-6">
            <FieldLabel>{group.label}</FieldLabel>
            <ul className="mt-4 divide-y divide-border">
              {group.points.map((point) => (
                <li
                  key={point}
                  className="py-3 text-sm leading-relaxed text-foreground first:pt-0 last:pb-0 md:text-[0.9375rem]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </ContentCard>
  );
}
