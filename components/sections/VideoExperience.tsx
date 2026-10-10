"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function VideoExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sync = () => {
      const rect = section.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.9 && rect.bottom > 80;
      if (!visible) return;
      if (reduce) {
        video.pause();
        queueMicrotask(() => setPaused(true));
        return;
      }
      if (video.paused) {
        void video.play().then(() => setPaused(false)).catch(() => setPaused(true));
      }
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const state = { cancelled: false, revert: undefined as undefined | (() => void) };

    void (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (state.cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.fromTo(
          frame,
          { scale: 0.9, y: 40 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          },
        );
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
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <section id="craft" ref={sectionRef} className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal">
      <div ref={frameRef} className="absolute inset-0 origin-center">
        <video
          ref={videoRef}
          className="h-full w-full object-cover video-grade"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/experience-video-poster.jpg"
          aria-label="Close-up of clippers finishing a hairline"
        >
          <source src="/videos/experience.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.36em] text-gold">The film</p>
        <h2 className="mt-6 max-w-5xl font-serif text-[clamp(2.6rem,7vw,6.4rem)] uppercase leading-[0.88] tracking-[-0.04em] text-ivory">
          Crafted for the
          <br />
          modern gentleman
        </h2>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-label={paused ? "Play video" : "Pause video"}
        className="absolute bottom-8 right-6 z-10 grid h-12 w-12 place-items-center border border-ivory/40 bg-charcoal/40 text-ivory backdrop-blur transition hover:border-gold hover:text-gold md:right-12"
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </section>
  );
}
