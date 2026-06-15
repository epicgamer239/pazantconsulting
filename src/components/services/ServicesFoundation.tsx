interface ServicesFoundationProps {
  items: string[];
}

export default function ServicesFoundation({ items }: ServicesFoundationProps) {
  const highlights = items.slice(0, 3);
  const supporting = items.slice(3);

  return (
    <div className="flex flex-col gap-6">
      <div className="panel grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {highlights.map((item) => (
          <p
            key={item}
            className="px-6 py-6 text-sm leading-relaxed text-foreground md:px-7 md:py-7 md:text-[0.9375rem]"
          >
            {item}
          </p>
        ))}
      </div>

      {supporting.length > 0 && (
        <ul className="panel divide-y divide-border">
          {supporting.map((item) => (
            <li
              key={item}
              className="px-6 py-4 text-sm leading-relaxed text-muted-foreground md:px-8 md:py-5 md:text-[0.9375rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
