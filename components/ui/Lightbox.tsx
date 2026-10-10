"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import type { GalleryItem } from "@/lib/site";

export function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const startX = useRef(0);
  const lenis = useLenis();
  const item = index === null ? null : items[index];

  useEffect(() => {
    if (!lenis) return;
    if (index !== null) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [index, lenis]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onChange, onClose]);

  return (
    <AnimatePresence>
      {item && index !== null ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/95 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/20 text-ivory"
            aria-label="Close gallery"
          >
            <X size={18} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 text-ivory md:grid"
            onClick={(event) => {
              event.stopPropagation();
              onChange((index - 1 + items.length) % items.length);
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 text-ivory md:grid"
            onClick={(event) => {
              event.stopPropagation();
              onChange((index + 1) % items.length);
            }}
          >
            <ChevronRight size={18} />
          </button>
          <motion.figure
            key={item.id}
            className="relative max-h-[82vh] w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              startX.current = event.touches[0]?.clientX ?? 0;
            }}
            onTouchEnd={(event) => {
              const delta = (event.changedTouches[0]?.clientX ?? 0) - startX.current;
              if (delta > 48) onChange((index - 1 + items.length) % items.length);
              if (delta < -48) onChange((index + 1) % items.length);
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1600}
              height={1200}
              className="mx-auto max-h-[74vh] w-auto object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-mist">
              <span>{item.category}</span>
              <span>
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
