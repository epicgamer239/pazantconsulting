import type { LucideIcon } from "lucide-react";
import { Building2, GraduationCap, Landmark } from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/content";

interface FounderProfileProps {
  credentials: string[];
  grounding: string[];
}

const credentialIcons: LucideIcon[] = [Landmark, Building2, GraduationCap];

export default function FounderProfile({ credentials, grounding }: FounderProfileProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
      <div className="lg:col-span-4 xl:col-span-5">
        <div className="panel h-full overflow-hidden">
          <div className="relative aspect-[4/5] min-h-[320px] lg:aspect-auto lg:min-h-full lg:h-full">
            <Image
              src={site.founderImageSrc}
              alt="Alecia Pazant Hall, founder of Pazant Consulting Services"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 35vw"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:col-span-8 xl:col-span-7">
        <ul className="divide-y divide-border border-b border-border">
          {credentials.map((item, index) => {
            const Icon = credentialIcons[index % credentialIcons.length];
            return (
              <li key={item} className="flex gap-5 py-4 first:pt-0 last:pb-6 md:py-5 md:last:pb-7">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold"
                  aria-hidden
                >
                  <Icon className="size-[1.125rem]" strokeWidth={1.5} />
                </div>
                <p className="pt-2 text-base font-medium leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.65]">
                  {item}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-lg leading-[1.75] text-muted-foreground md:mt-7 md:text-xl">
          Alecia brings a rare combination of federal, prime-contractor, and organizational
          leadership experience to small businesses navigating the federal landscape.
        </p>

        <div className="mt-6 border-t border-border pt-6 md:mt-7 md:pt-7">
          <p className="text-sm font-semibold text-muted-foreground">
            Her work is grounded in
          </p>
          <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 md:mt-4 md:gap-y-3">
            {grounding.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-brand-gold"
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.65]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
