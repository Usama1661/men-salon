import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { BookLink } from "@/components/ui/BookLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { barbers, salon } from "@/lib/site";
import { container } from "@/lib/utils";

export function Barbers() {
  return (
    <section id="barbers" className="bg-ink py-24 md:py-32">
      <div className={container}>
        <SectionHeading index="05" eyebrow="Sample team" title="Master barbers">
          Portraits, names, and years are demonstration profiles. Replace them with the salon&apos;s own barbers before launch.
        </SectionHeading>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {barbers.map((barber, index) => (
            <Reveal key={barber.id} delay={index * 0.06}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={barber.image}
                    alt={barber.alt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 transition duration-500 group-hover:translate-y-0">
                    <p className="font-serif text-[2rem] leading-none text-ivory">{barber.name}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-gold">{barber.specialty}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-ivory">{barber.role}</p>
                    <p className="mt-1 text-sm text-mist">{barber.experience}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={salon.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${barber.name} on Instagram`}
                      className="grid h-9 w-9 place-items-center border border-white/15 text-ivory transition hover:border-gold hover:text-gold"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={salon.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${barber.name} on Facebook`}
                      className="grid h-9 w-9 place-items-center border border-white/15 text-ivory transition hover:border-gold hover:text-gold"
                    >
                      <FacebookIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <BookLink barberId={barber.id} variant="ghost" className="mt-5 w-full" icon={false}>
                  Request this chair
                </BookLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
