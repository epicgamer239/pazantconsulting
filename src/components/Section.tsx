import { cn } from "@/lib/utils";

type SectionBand = "default" | "teal" | "surface";
type SectionSize = "default" | "compact" | "spacious" | "cta";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  band?: SectionBand;
  bleed?: boolean;
  size?: SectionSize;
  headerWide?: boolean;
  viewport?: boolean;
  snap?: boolean;
}

const sectionSizeClasses: Record<SectionSize, string> = {
  default: "section-padding",
  compact: "section-padding-compact",
  spacious: "section-padding-spacious",
  cta: "section-padding-cta",
};

const headerSizeClasses: Record<SectionSize, string> = {
  default: "mb-12",
  compact: "mb-8",
  spacious: "mb-14",
  cta: "mb-6",
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  dark = false,
  band = "default",
  bleed = false,
  size = "default",
  headerWide = false,
  viewport = false,
  snap = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "reveal-in",
        sectionSizeClasses[size],
        viewport && "section-viewport",
        snap && "snap-start",
        dark && "section-dark",
        band === "teal" && "band-teal",
        band === "surface" && "band-surface",
        className
      )}
    >
      <div
        className={cn(
          !bleed && "mx-auto max-w-6xl px-6 lg:px-8",
          viewport && "flex w-full flex-1 flex-col justify-center"
        )}
      >
        {(title || subtitle) && (
          <header
            className={cn(
              headerSizeClasses[size],
              headerWide ? "max-w-3xl" : "max-w-2xl"
            )}
          >
            {title && (
              <>
                <h2
                  className={cn(
                    "text-balance font-serif text-[clamp(1.625rem,3vw,2.375rem)] font-semibold leading-tight tracking-[-0.02em]",
                    dark ? "text-white" : "text-foreground"
                  )}
                >
                  {title}
                </h2>
                <div
                  className={cn(
                    "mt-3 h-1 w-12 rounded-sm",
                    dark ? "bg-brand-gold-light" : "bg-brand-gold"
                  )}
                  aria-hidden
                />
              </>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-pretty text-base leading-relaxed md:text-lg",
                  dark ? "text-white/85" : "text-muted-foreground"
                )}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
