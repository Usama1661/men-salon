"use client";

import { FormEvent, useState } from "react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { navLinks, salon } from "@/lib/site";
import { fieldClass } from "@/lib/utils";

export function Footer({ year }: { year: number }) {
  const [joined, setJoined] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setJoined(true);
  };

  return (
    <footer className="bg-[#070707] text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-10 lg:px-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <p className="font-serif text-[clamp(3.6rem,11vw,9.2rem)] leading-[0.82] tracking-[-0.045em]">
            The Gentlemen&apos;s
            <br />
            Club
          </p>
          <form onSubmit={onSubmit} className="max-w-md lg:justify-self-end lg:pb-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">The list</p>
            <p className="mt-3 font-serif text-3xl leading-none">Notes from the chair.</p>
            <p className="mt-3 text-sm leading-6 text-mist">
              Demo signup. Nothing is stored or sent until this form is connected to a mailing list.
            </p>
            {joined ? (
              <p className="mt-6 border-t border-gold/40 pt-4 text-sm text-ivory" role="status">
                Saved on this screen only. Connect the list when the salon goes live.
              </p>
            ) : (
              <div className="mt-6 flex items-end gap-3">
                <label className="flex-1">
                  <span className="sr-only">Email address</span>
                  <input required type="email" name="email" placeholder="Email address" className={fieldClass} />
                </label>
                <button
                  type="submit"
                  className="mb-1 shrink-0 bg-gold px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-charcoal transition hover:bg-ivory"
                >
                  Join
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Visit</p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-6 text-ivory/85">
              {salon.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Hours</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/85">
              {salon.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span className="text-mist">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory/80 transition hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#membership" className="text-ivory/80 transition hover:text-gold">
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/85">
              <li>
                <a href={`tel:${salon.phoneTel}`} className="transition hover:text-gold">
                  {salon.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${salon.email}`} className="transition hover:text-gold">
                  {salon.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={salon.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border border-white/15 transition hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={salon.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center border border-white/15 transition hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${salon.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center border border-white/15 transition hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} The Gentlemen&apos;s Club. Showcase website.</p>
          <a
            href="https://gitbytelabs.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gold"
          >
            Website Experience by GitByte Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
