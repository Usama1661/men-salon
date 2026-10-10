"use client";

import { useEffect, useRef } from "react";

export function StatValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = value.toLocaleString("en-US");
      return;
    }

    const state = { cancelled: false, revert: undefined as undefined | (() => void) };

    void (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (state.cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const counter = { n: 0 };
      const context = gsap.context(() => {
        gsap.to(counter, {
          n: value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            if (ref.current) {
              ref.current.textContent = Math.round(counter.n).toLocaleString("en-US");
            }
          },
        });
      });
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
  }, [value]);

  return (
    <span className="font-serif text-[clamp(2.8rem,5vw,4.4rem)] leading-none tracking-[-0.04em] text-ivory">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
