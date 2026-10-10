type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M14.2 8.5V6.9c0-.7.5-1 1.2-1h1.5V3.2h-2.2c-2.4 0-3.9 1.5-3.9 3.8v1.5H8.4V11h2.4v9.8h3.4V11h2.3l.4-2.5h-2.7Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 3.2A8.7 8.7 0 0 0 4.6 16.3L3.4 20.8l4.6-1.2a8.7 8.7 0 0 0 4.04 1 8.76 8.76 0 0 0 0-17.5Zm0 16a7.2 7.2 0 0 1-3.67-1l-.26-.16-2.73.72.73-2.66-.17-.27a7.24 7.24 0 1 1 6.1 3.37Zm4.2-5.42c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.12-.14.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.93 2.35c.12.15 1.61 2.46 3.9 3.45 1.45.63 2.01.68 2.73.57.41-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.15-.44-.27Z" />
    </svg>
  );
}
