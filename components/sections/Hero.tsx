"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { RevealText } from "@/components/motion/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media || reduce) return;

    const state = { cancelled: false, revert: undefined as undefined | (() => void) };

    void (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (state.cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.to(media, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, section);
      if (state.cancelled) {
        context.revert();
        return;
      }
      state.revert = () => context.revert();
    })();

    return () => {
      state.cancelled = true;
      state.revert?.();
    };
  }, [reduce]);

  return (
    <section id="home" ref={sectionRef} className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal">
      <div ref={mediaRef} className="absolute -top-[8%] left-0 h-[116%] w-full">
        <Image
          src="/images/hero-poster.jpg"
          alt="Barber performing a precision haircut in a dark luxury salon"
          fill
          priority
          sizes="100vw"
          className="hero-still object-cover object-[center_30%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.45)_0%,rgba(11,11,11,0.15)_32%,rgba(11,11,11,0.5)_68%,rgba(11,11,11,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.78)_0%,rgba(11,11,11,0.2)_48%,rgba(11,11,11,0.35)_100%)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-8 pt-28 md:px-14 md:pb-12">
        <p className="text-[11px] uppercase tracking-[0.42em] text-gold">The Gentlemen&apos;s Club</p>
        <h1 className="mt-5 max-w-5xl font-serif text-[clamp(2.7rem,10.5vw,7.8rem)] uppercase leading-[0.84] tracking-[-0.04em] text-ivory">
          <RevealText>More than</RevealText>
          <RevealText>a haircut.</RevealText>
        </h1>
        <motion.p
          className="mt-5 font-serif text-[clamp(1.35rem,3.4vw,2.5rem)] uppercase italic leading-none tracking-[0.08em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
        >
          It&apos;s an experience.
        </motion.p>
        <motion.p
          className="mt-6 max-w-md text-[15px] leading-7 text-ivory/80"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          Elevating men&apos;s grooming through precision, craftsmanship, and timeless style.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center bg-gold px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition duration-300 hover:bg-ivory"
          >
            Book Your Experience
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-ivory/35 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition duration-300 hover:border-gold hover:text-gold"
          >
            Explore Our Services
          </a>
        </motion.div>

        <a href="#about" className="mt-12 flex flex-col items-center gap-3 self-center text-ivory/70">
          <span className="text-[10px] uppercase tracking-[0.34em]">Scroll</span>
          <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
            <span className="scroll-line absolute left-0 top-0 h-4 w-px bg-gold" />
          </span>
        </a>
      </div>
    </section>
  );
}
