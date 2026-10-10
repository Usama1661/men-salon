"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { navLinks, salon } from "@/lib/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 24);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [lenis, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <header
        data-scrolled={solid ? "true" : "false"}
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition duration-500",
          solid ? "border-b border-white/10 bg-charcoal/90 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:h-[5.25rem] md:px-10 lg:px-14">
          <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center border border-gold/80 text-[11px] tracking-[0.16em] text-gold">
              GC
            </span>
            <span className="hidden leading-none sm:flex sm:flex-col">
              <span className="font-serif text-[15px] tracking-[0.28em] text-ivory">THE GENTLEMEN&apos;S</span>
              <span className="mt-1 text-[10px] tracking-[0.42em] text-gold">CLUB</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11px] uppercase tracking-[0.18em] text-ivory/75 transition hover:text-ivory"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold transition duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition duration-300 hover:bg-ivory sm:inline-flex"
            >
              Book Appointment
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-white/15 text-ivory lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-navigation"
            className="fixed inset-0 z-50 flex flex-col bg-charcoal px-6 pb-10 pt-28 lg:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="flex flex-1 flex-col justify-center gap-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-[clamp(2.4rem,10vw,3.6rem)] leading-none tracking-[-0.03em] text-ivory"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-8 bg-gold px-6 py-4 text-center text-[12px] uppercase tracking-[0.22em] text-charcoal"
            >
              Book Appointment
            </a>
            <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-mist">{salon.tagline}</p>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
