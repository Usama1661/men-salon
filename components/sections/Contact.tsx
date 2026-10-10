"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { salon } from "@/lib/site";
import { cn, container, fieldClass } from "@/lib/utils";

export function Contact() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(salon.mapQuery)}&z=15&output=embed`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className={container}>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="10" eyebrow="Demo studio" title="Visit the club">
              Address, hours, and the map pin are placeholders. Swap them for the salon&apos;s own details when the site goes live.
            </SectionHeading>

            <ul className="mt-10 space-y-6 text-sm leading-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" size={18} />
                <span>
                  {salon.address.map((line) => (
                    <span key={line} className="block text-ivory/85">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-gold" size={18} />
                <span className="space-y-1">
                  {salon.hours.map((row) => (
                    <span key={row.days} className="flex justify-between gap-6 text-ivory/85">
                      <span>{row.days}</span>
                      <span className="text-mist">{row.time}</span>
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-gold" size={18} />
                <span>
                  <a href={`tel:${salon.phoneTel}`} className="text-ivory transition hover:text-gold">
                    {salon.phoneDisplay}
                  </a>
                  <span className="mt-1 block text-mist">{salon.email}</span>
                </span>
              </li>
            </ul>

            <a
              href={`https://wa.me/${salon.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-gold/50 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-charcoal"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp booking
            </a>
          </div>

          <div className="border border-white/10 p-6 dark-controls sm:p-10 lg:col-span-7">
            {sent ? (
              <div role="status">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Demo message</p>
                <h3 className="mt-3 font-serif text-4xl text-ivory">Received on this page only.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-mist">
                  This showcase does not send email. Connect the form to the salon inbox when you launch.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 text-[11px] uppercase tracking-[0.2em] text-gold"
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-7">
                <p className="font-serif text-4xl text-ivory">Write to the house</p>
                <div className="grid gap-7 sm:grid-cols-2">
                  <label>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Name</span>
                    <input required name="name" autoComplete="name" className={cn(fieldClass, "mt-2")} />
                  </label>
                  <label>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" className={cn(fieldClass, "mt-2")} />
                  </label>
                </div>
                <label>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Email</span>
                  <input required type="email" name="email" autoComplete="email" className={cn(fieldClass, "mt-2")} />
                </label>
                <label>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Message</span>
                  <textarea required name="message" rows={4} className={cn(fieldClass, "mt-2 resize-none")} />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-charcoal transition hover:bg-ivory sm:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>

        <motion.div
          className="mt-14 overflow-hidden border border-white/10"
          initial={reduce ? false : { opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            title="Demo map pin for Clifton Block 5, Karachi"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full grayscale contrast-125 transition duration-700 hover:grayscale-0"
          />
        </motion.div>
        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-mist">Demo pin — replace with the salon&apos;s map.</p>
      </div>
    </section>
  );
}
