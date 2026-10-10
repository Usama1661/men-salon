"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [value, setValue] = useState(52);

  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-ink sm:aspect-[4/5]">
      <Image src={after} alt={afterAlt} fill className="object-cover" sizes="(min-width: 1024px) 520px, 90vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill className="object-cover" sizes="(min-width: 1024px) 520px, 90vw" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-gold"
        style={{ left: `${value}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-charcoal/80 text-[10px] tracking-[0.14em] text-gold">
          DRAG
        </span>
      </div>
      <span className="pointer-events-none absolute left-4 top-4 bg-charcoal/70 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-ivory">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-charcoal/70 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-ivory">
        After
      </span>
      <input
        type="range"
        min={2}
        max={98}
        value={value}
        aria-label="Drag to compare the sample before and after"
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-0 z-20 cursor-ew-resize opacity-0"
      />
    </div>
  );
}
