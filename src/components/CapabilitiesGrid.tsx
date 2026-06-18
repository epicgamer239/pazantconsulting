interface CapabilitiesGridProps {
  capabilities: { label: string; description: string }[];
}

export default function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {capabilities.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-border bg-card p-7 md:p-8"
        >
          <h4 className="font-serif text-xl font-semibold text-foreground md:text-[1.375rem]">
            {item.label}
          </h4>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
