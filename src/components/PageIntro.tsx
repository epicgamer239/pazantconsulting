interface PageIntroProps {
  title: string;
  subtitle?: string;
  srOnlyLabel?: string;
  children?: React.ReactNode;
  compact?: boolean;
  slim?: boolean;
  embedded?: boolean;
  viewport?: boolean;
}

export default function PageIntro({
  title,
  subtitle,
  srOnlyLabel,
  children,
  compact = false,
  slim = false,
  embedded = false,
  viewport = false,
}: PageIntroProps) {
  const padding = embedded
    ? ""
    : viewport
      ? ""
      : slim
        ? "py-6 lg:py-8"
        : compact
          ? "py-10 lg:py-12"
          : "py-16 lg:py-20";

  const content = (
    <>
      <h1
        className={`max-w-3xl text-balance font-serif font-semibold leading-tight tracking-[-0.03em] text-foreground ${
          embedded || slim
            ? "text-[clamp(1.75rem,3.5vw,2.5rem)]"
            : compact
              ? "text-[clamp(1.875rem,3.75vw,2.625rem)]"
              : "text-[clamp(2rem,4vw,2.75rem)]"
        }`}
      >
        {srOnlyLabel && <span className="sr-only">{srOnlyLabel} — </span>}
        {title}
      </h1>
      <div className="mt-3 h-1 w-12 rounded-sm bg-brand-gold" aria-hidden />
      {subtitle && (
        <p
          className={`max-w-2xl text-pretty leading-relaxed text-muted-foreground ${
            slim || embedded
              ? "mt-4 text-sm md:text-base"
              : "mt-5 text-base md:text-lg md:leading-[1.75]"
          }`}
        >
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </>
  );

  if (embedded) {
    return <header className="mb-0">{content}</header>;
  }

  return (
    <section
      className={`border-b border-border bg-surface ${padding} ${viewport ? "section-viewport snap-start" : ""}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 lg:px-8 ${viewport ? "flex w-full flex-1 flex-col justify-center" : ""}`}
      >
        {content}
      </div>
    </section>
  );
}
