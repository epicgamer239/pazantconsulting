import { homeWhyClients } from "@/lib/content";

export default function WhyClientsSection() {
  return (
    <ul className="max-w-3xl space-y-3">
      {homeWhyClients.reasons.map((reason) => (
        <li
          key={reason}
          className="marker-check-badge list-row text-sm leading-relaxed text-foreground md:text-[0.9375rem]"
        >
          {reason}
        </li>
      ))}
    </ul>
  );
}
