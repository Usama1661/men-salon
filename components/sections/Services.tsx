import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { BookLink } from "@/components/ui/BookLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";
import { cn, container, formatPrice } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className={container}>
        <SectionHeading index="03" eyebrow="The menu" title="Services">
          Eight house rituals, photographed and priced for this showcase. Every figure is a demo price in PKR and can be edited in one content file.
        </SectionHeading>

        <div className="mt-8 md:mt-16">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={service.id}>
                <article className="group grid items-center gap-8 border-t border-white/10 py-12 last:border-b lg:grid-cols-12 lg:gap-16 lg:py-16">
                  <div className={cn("lg:col-span-7", reverse && "lg:order-2")}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>
                  <div className={cn("lg:col-span-5", reverse && "lg:order-1")}>
                    <p className="text-[11px] tracking-[0.32em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] tracking-[-0.03em] text-ivory">
                      {service.name}
                    </h3>
                    <p className="mt-5 max-w-md text-[15px] leading-7 text-mist">{service.description}</p>
                    <div className="mt-8 flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                      <p>
                        <span className="block text-[10px] uppercase tracking-[0.28em] text-gold">Demo price</span>
                        <span className="mt-2 block font-serif text-3xl text-ivory">{formatPrice(service.price)}</span>
                      </p>
                      <p className="pb-1 text-[12px] uppercase tracking-[0.2em] text-ivory/70">{service.duration}</p>
                    </div>
                    <BookLink serviceId={service.id} className="mt-8">
                      Book Now
                    </BookLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
