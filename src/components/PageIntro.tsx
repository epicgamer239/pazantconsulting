interface PageIntroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  compact?: boolean;
  slim?: boolean;
}

export default function PageIntro({
  title,
  subtitle,
  children,
  compact = false,
  slim = false,
}: PageIntroProps) {
  const padding = slim
    ? "py-6 lg:py-8"
    : compact
      ? "py-10 lg:py-12"
      : "py-16 lg:py-20";

  return (
    <section className="border-b border-border bg-surface">
      <div className={`mx-auto max-w-6xl px-6 lg:px-8 ${padding}`}>
        <h1
          className={`max-w-3xl text-balance font-serif font-semibold leading-tight tracking-[-0.03em] text-foreground ${
            compact || slim
              ? "text-[clamp(1.75rem,3.5vw,2.5rem)]"
              : "text-[clamp(2rem,4vw,2.75rem)]"
          }`}
        >
          {title}
        </h1>
        <div className="mt-3 h-1 w-12 rounded-sm bg-brand-gold" aria-hidden />
        {subtitle && (
          <p
            className={`max-w-2xl text-pretty leading-relaxed text-muted-foreground ${
              slim
                ? "mt-4 text-sm md:text-base"
                : "mt-5 text-base md:text-lg"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
