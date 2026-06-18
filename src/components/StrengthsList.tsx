interface StrengthsListProps {
  items: string[];
}

export default function StrengthsList({ items }: StrengthsListProps) {
  return (
    <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <span
            className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-brand-gold"
            aria-hidden
          />
          <p className="text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.65]">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}
