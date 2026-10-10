"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(window.scrollY > 720);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => lenis?.scrollTo(0)}
      className={cn(
        "fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center border border-gold/70 bg-charcoal/85 text-gold backdrop-blur transition duration-300 hover:bg-gold hover:text-charcoal",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp size={18} strokeWidth={1.5} />
    </button>
  );
}
