import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  tone = "dark",
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const light = tone === "light";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "text-[11px] uppercase tracking-[0.32em]",
          light ? "text-gold-deep" : "text-gold",
        )}
      >
        {index} — {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-serif text-[clamp(2.7rem,6vw,5.2rem)] leading-[0.9] tracking-[-0.03em]",
          light ? "text-charcoal" : "text-ivory",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-6 max-w-xl text-[15px] leading-7",
            light ? "text-ink-soft" : "text-mist",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
