"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryFilters, galleryItems, transformation, type GalleryFilter } from "@/lib/site";
import { cn, container } from "@/lib/utils";

const aspects = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" || filter === "Transformations" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  const showTransformation = filter === "All" || filter === "Transformations";
  const showMasonry = filter !== "Transformations";

  return (
    <section id="gallery" className="bg-charcoal py-24 md:py-32">
      <div className={container}>
        <SectionHeading index="04" eyebrow="The archive" title="Gallery">
          Fades, classic shapes, beard work, and a sample before-and-after. These photographs are demonstration imagery.
        </SectionHeading>

        <div className="mt-10 flex gap-x-6 gap-y-3 overflow-x-auto pb-2 text-[12px] uppercase tracking-[0.18em]">
          {galleryFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setActive(null);
              }}
              className={cn(
                "shrink-0 border-b pb-1 transition",
                filter === item ? "border-gold text-gold" : "border-transparent text-mist hover:text-ivory",
              )}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>

        {showTransformation ? (
          <div className="mt-12 grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Sample transformation</p>
              <h3 className="mt-4 font-serif text-5xl leading-[0.95] text-ivory">Before & after</h3>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-mist">
                Drag the line to compare a demonstration pair. These are not a documented client result.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <BeforeAfter
                before={transformation.before}
                after={transformation.after}
                beforeAlt={transformation.beforeAlt}
                afterAlt={transformation.afterAlt}
              />
            </div>
          </div>
        ) : null}

        {showMasonry ? (
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {visible.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left"
                onClick={() => setActive(index)}
              >
                <span className={cn("relative block overflow-hidden", aspects[item.aspect])}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-charcoal/0 transition duration-500 group-hover:bg-charcoal/35" />
                  <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.22em] text-ivory opacity-0 transition duration-500 group-hover:opacity-100">
                    {item.category}
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <Lightbox items={visible} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}
