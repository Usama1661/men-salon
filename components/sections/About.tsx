import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { StatValue } from "@/components/ui/StatValue";
import { stats } from "@/lib/site";
import { container } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="bg-charcoal py-24 md:py-32 lg:py-40">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
        <Reveal className="lg:col-span-6">
          <div className="relative lg:mr-8">
            <div className="absolute bottom-0 right-0 hidden h-[86%] w-[86%] border border-gold/45 lg:block" />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Editorial portrait of a master barber in a dark salon"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">02 — The house</p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.9] tracking-[-0.03em] text-ivory">
              The art of grooming
            </h2>
            <span className="mt-7 block h-px w-16 bg-gold" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 text-[16px] leading-8 text-ivory/78">
              <p>
                A chair here is a pause in the day — measured, unhurried, and exact. Every cut is mapped to the face, every beard is lined with intention, and the visit is composed like a private appointment.
              </p>
              <p>
                The room is built for men who care how they enter a meeting, a wedding, or a quiet evening. Craft sits beside hospitality: hot towels, considered conversation, and a finish that still looks correct a week later.
              </p>
              <p className="text-mist">
                This page is a GitByte Labs showcase. The portraits, prices, stories, and figures are demonstration content for salon owners reviewing a premium website.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-gold/50 pt-5">
                <StatValue value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-sm leading-5 text-mist">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold">Showcase figures</p>
        </div>
      </div>
    </section>
  );
}
