import { marquee } from "@/lib/site";

export function Marquee() {
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-white/10 bg-ink py-5">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center pr-8">
            {marquee.map((phrase) => (
              <span
                key={`${copy}-${phrase}`}
                className="flex items-center gap-8 pr-8 text-[12px] uppercase tracking-[0.42em] text-ivory/75"
              >
                {phrase}
                <span className="inline-block h-1 w-1 bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
