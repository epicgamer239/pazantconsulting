import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "default" | "none";
  /** Subtle lift on hover — use only when the card is clickable. */
  interactive?: boolean;
}

export function ContentCard({
  children,
  className,
  padding = "default",
  interactive = false,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "panel",
        interactive && "panel-hover",
        padding === "default" && "p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-muted-foreground">{children}</p>
  );
}

export function CardDivider({ className }: { className?: string }) {
  return <hr className={cn("border-border", className)} />;
}
