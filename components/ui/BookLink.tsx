"use client";

import { ArrowUpRight } from "lucide-react";
import { requestBooking } from "@/lib/booking";
import { cn } from "@/lib/utils";

const variants = {
  solid:
    "inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition duration-300 hover:bg-ivory",
  ghost:
    "inline-flex items-center justify-center gap-2 border border-ivory/35 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition duration-300 hover:border-gold hover:text-gold",
  line:
    "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold transition duration-300 hover:text-ivory",
  ink:
    "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold-deep transition duration-300 hover:text-charcoal",
};

export function BookLink({
  serviceId,
  barberId,
  children,
  variant = "line",
  className,
  icon = true,
}: {
  serviceId?: string;
  barberId?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href="#booking"
      onClick={() => requestBooking({ serviceId, barberId })}
      className={cn(variants[variant], className)}
    >
      {children}
      {icon ? <ArrowUpRight size={14} strokeWidth={1.5} /> : null}
    </a>
  );
}
