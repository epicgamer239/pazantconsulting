import { cn } from "@/lib/utils";

interface TypographicCalloutProps {
  lines: string[];
  className?: string;
}

export default function TypographicCallout({ lines, className }: TypographicCalloutProps) {
  return (
    <figure className={cn("max-w-md border-t-2 border-brand-gold bg-brand-gold/5 px-5 py-8", className)}>
      <blockquote>
        <p className="font-serif text-[clamp(1.375rem,2.75vw,2rem)] font-semibold leading-snug text-foreground">
          {lines[0]}
        </p>
        {lines[1] && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {lines[1]}
          </p>
        )}
      </blockquote>
    </figure>
  );
}
