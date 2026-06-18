import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Compass,
  Handshake,
  Landmark,
  Layers,
  Scale,
} from "lucide-react";
import { ContentCard, CardDivider } from "@/components/ContentCard";

interface GroundingGridProps {
  items: string[];
}

const groundingIcons: LucideIcon[] = [
  Layers,
  Landmark,
  Handshake,
  Brain,
  Scale,
  Compass,
];

export default function GroundingGrid({ items }: GroundingGridProps) {
  return (
    <ContentCard className="p-0">
      <div className="px-6 py-6 md:px-8 md:py-8">
        <p className="font-serif text-lg font-semibold text-foreground md:text-xl">
          Our work is grounded in
        </p>
      </div>
      <CardDivider />
      <ul className="divide-y divide-border">
        {items.map((item, index) => {
          const Icon = groundingIcons[index % groundingIcons.length];
          return (
            <li key={item} className="flex gap-4 px-6 py-5 md:px-8 md:py-6">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-md border border-teal/15 bg-teal/8 text-teal"
                aria-hidden
              >
                <Icon className="size-[1.125rem]" strokeWidth={1.75} />
              </div>
              <p className="pt-0.5 text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.65]">
                {item}
              </p>
            </li>
          );
        })}
      </ul>
    </ContentCard>
  );
}
