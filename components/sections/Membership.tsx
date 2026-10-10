import { Reveal } from "@/components/motion/Reveal";
import { BookLink } from "@/components/ui/BookLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { memberships } from "@/lib/site";
import { cn, container, formatPrice } from "@/lib/utils";

export function Membership() {
  return (
    <section id="membership" className="bg-ivory py-24 text-charcoal md:py-32">
      <div className={container}>
        <SectionHeading index="08" eyebrow="Retainers" title="Membership" tone="light">
          Three house retainers with demonstration pricing. The VIP sitting is set apart by tone, not by noise.
        </SectionHeading>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {memberships.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.08} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col p-8 md:p-10",
                  plan.featured
                    ? "border border-gold bg-charcoal text-ivory lg:-translate-y-3"
                    : "border border-charcoal/12 bg-transparent",
                )}
              >
                <p className={cn("text-[11px] uppercase tracking-[0.28em]", plan.featured ? "text-gold" : "text-gold-deep")}>
                  {plan.featured ? "The private sitting" : "Monthly"}
                </p>
                <h3 className="mt-4 font-serif text-[2.4rem] leading-[0.95]">{plan.name}</h3>
                <p className={cn("mt-4 text-sm leading-6", plan.featured ? "text-ivory/70" : "text-ink-soft")}>
                  {plan.summary}
                </p>
                <p className="mt-8">
                  <span className={cn("block text-[10px] uppercase tracking-[0.28em]", plan.featured ? "text-gold" : "text-gold-deep")}>
                    Demo price
                  </span>
                  <span className="mt-2 block font-serif text-4xl">{formatPrice(plan.price)}</span>
                  <span className={cn("mt-1 block text-xs uppercase tracking-[0.18em]", plan.featured ? "text-mist" : "text-ink-soft")}>
                    per month
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm leading-6">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className={cn("mt-2 h-px w-4 shrink-0", plan.featured ? "bg-gold" : "bg-gold-deep")} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <BookLink
                  serviceId={plan.id}
                  variant={plan.featured ? "solid" : "ink"}
                  className="mt-10"
                >
                  Book this retainer
                </BookLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
