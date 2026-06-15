import { ContentCard, CardDivider, FieldLabel } from "@/components/ContentCard";

interface GroundingGridProps {
  items: string[];
}

export default function GroundingGrid({ items }: GroundingGridProps) {
  return (
    <ContentCard className="p-0">
      <div className="px-6 py-5 md:px-8 md:py-6">
        <FieldLabel>Experience & approach</FieldLabel>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The federal, prime-contractor, and organizational effectiveness background behind
          every engagement.
        </p>
      </div>
      <CardDivider />
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            {index > 0 && <CardDivider />}
            <p className="px-6 py-4 text-sm leading-relaxed text-foreground md:px-8 md:py-5 md:text-[0.9375rem]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </ContentCard>
  );
}
