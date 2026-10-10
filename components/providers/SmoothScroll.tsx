"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import "lenis/dist/lenis.css";

function ScrollTriggerBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    let unsubscribe: (() => void) | undefined;
    let alive = true;

    void (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;
      gsap.registerPlugin(ScrollTrigger);
      unsubscribe = lenis.on("scroll", () => {
        ScrollTrigger.update();
      });
      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      unsubscribe?.();
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        anchors: { offset: -88 },
      }}
    >
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
