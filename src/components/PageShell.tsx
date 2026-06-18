import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  snap?: boolean;
  className?: string;
  id?: string;
}

export default function PageShell({ children, snap = false, className, id }: PageShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "page-shell-top reveal-in border-b border-border bg-background",
        id && "scroll-mt-24",
        snap && "snap-start",
        className
      )}
    >
      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-6 lg:px-8">{children}</div>
    </section>
  );
}
