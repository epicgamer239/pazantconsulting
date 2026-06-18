const credentials = [
  { label: "Senior SBA Advisor", detail: "Presidential Appointment" },
  { label: "Prime Contractor SBLO", detail: "Major federal prime" },
  { label: "MIT Sloan AI Strategy", detail: "Executive Certificate" },
];

export default function CredentialStrip() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-3 sm:divide-x sm:divide-border">
        {credentials.map(({ label, detail }) => (
          <div key={label} className="border-b border-border px-6 py-8 last:border-b-0 sm:border-b-0 lg:px-8">
            <p className="text-base font-semibold text-foreground md:text-lg">{label}</p>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
