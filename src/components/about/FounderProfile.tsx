import Image from "next/image";

interface FounderProfileProps {
  grounding: string[];
}

export default function FounderProfile({ grounding }: FounderProfileProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
      <div className="lg:col-span-4 xl:col-span-5">
        <div className="panel">
          <div className="relative aspect-[4/5] max-w-md lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="Alecia Pazant Hall, founder of Pazant Consulting Services"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 35vw"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 xl:col-span-7">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Alecia brings a rare combination of federal, prime-contractor, and organizational
          leadership experience to small businesses navigating the federal landscape.
        </p>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-sm font-semibold text-muted-foreground">
            Her work is grounded in
          </p>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {grounding.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-foreground md:text-[0.9375rem]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
