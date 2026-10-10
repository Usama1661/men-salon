export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function formatPrice(amount: number) {
  return `PKR ${new Intl.NumberFormat("en-PK").format(amount)}`;
}

export const container = "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14";

export const fieldClass =
  "w-full appearance-none border-b border-white/15 bg-transparent py-3 text-[15px] text-ivory outline-none transition placeholder:text-white/25 focus:border-gold";
