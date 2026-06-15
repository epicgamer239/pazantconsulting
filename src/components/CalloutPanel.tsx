import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

interface CalloutPanelProps {
  lines: string[];
  variant?: "panel" | "inline";
  className?: string;
}

export default function CalloutPanel({
  lines,
  variant = "panel",
  className,
}: CalloutPanelProps) {
  const content = (
    <>
      <span className="font-serif text-4xl leading-none text-teal/30" aria-hidden>
        &ldquo;
      </span>
      <figure>
        <blockquote>
          <p className="mt-2 font-serif text-[clamp(1.375rem,2.75vw,2rem)] font-semibold leading-snug text-foreground">
            {lines[0]}
          </p>
          {lines[1] && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {lines[1]}
            </p>
          )}
        </blockquote>
      </figure>
    </>
  );

  if (variant === "inline") {
    return <div className={cn("max-w-md", className)}>{content}</div>;
  }

  return <ContentCard className={className}>{content}</ContentCard>;
}
