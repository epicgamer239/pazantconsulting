import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "default" | "none";
}

export function ContentCard({ children, className, padding = "default" }: ContentCardProps) {
  return (
    <div
      className={cn(
        "panel",
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
