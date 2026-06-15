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
          <div key={label} className="border-b border-border px-6 py-7 last:border-b-0 sm:border-b-0 lg:px-8">
            <p className="font-semibold text-foreground">{label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
