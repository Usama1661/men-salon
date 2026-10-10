"use client";

import { ChevronDown } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BOOKING_EVENT, type BookingSelection } from "@/lib/booking";
import { barbers, bookingOptions, demoSlots, salon } from "@/lib/site";
import { cn, container, fieldClass } from "@/lib/utils";

type FormState = {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  notes: string;
};

const initial: FormState = {
  serviceId: "",
  barberId: "any",
  date: "",
  time: "",
  name: "",
  phone: "",
  notes: "",
};

export function Booking() {
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onSelect = (event: Event) => {
      const detail = (event as CustomEvent<BookingSelection>).detail;
      setForm((current) => ({
        ...current,
        serviceId: detail.serviceId ?? current.serviceId,
        barberId: detail.barberId ?? current.barberId,
      }));
      setMessage("");
    };
    window.addEventListener(BOOKING_EVENT, onSelect);
    return () => window.removeEventListener(BOOKING_EVENT, onSelect);
  }, []);

  const summary = useMemo(() => {
    const service = bookingOptions.find((item) => item.id === form.serviceId)?.label ?? "Selected service";
    const barber = form.barberId === "any" ? "No preference" : barbers.find((item) => item.id === form.barberId)?.name;
    return { service, barber: barber ?? "No preference" };
  }, [form.barberId, form.serviceId]);

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.serviceId || !form.date || !form.time || !form.name.trim() || !form.phone.trim()) {
      setError("Choose a service, date, and demo time, then add your name and phone.");
      return;
    }

    const text = [
      "Hello The Gentlemen's Club,",
      "I would like to request a demo appointment.",
      "",
      `Service: ${summary.service}`,
      `Barber: ${summary.barber}`,
      `Date: ${form.date}`,
      `Time: ${form.time} (demo slot)`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(text)}`;
    setMessage(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="bg-charcoal py-24 md:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
        <div className="lg:col-span-5">
          <SectionHeading index="06" eyebrow="The chair" title="Reserve your chair">
            Tell us the service, the barber, and a preferred time. Confirmation opens WhatsApp with the details already written.
          </SectionHeading>
          <p className="mt-8 max-w-md border-l border-gold pl-5 text-sm leading-6 text-mist">
            Demo time slots only. This showcase does not check a live calendar. Connect a booking system before taking real appointments.
          </p>
        </div>

        <div className="border border-white/10 bg-ink p-6 dark-controls sm:p-10 lg:col-span-7">
          {message ? (
            <div role="status">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold">WhatsApp draft</p>
              <h3 className="mt-3 font-serif text-4xl text-ivory">Your request is ready.</h3>
              <pre className="mt-6 whitespace-pre-wrap font-sans text-sm leading-7 text-ivory/85">{message}</pre>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-gold px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-charcoal"
                >
                  Open WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setMessage("")}
                  className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ivory"
                >
                  Edit request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-7 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Select service</span>
                <span className="relative mt-2 block">
                  <select
                    required
                    value={form.serviceId}
                    onChange={(event) => update("serviceId", event.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Choose a service</option>
                    {bookingOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gold" />
                </span>
              </label>

              <label className="sm:col-span-2">
                <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Select barber</span>
                <span className="relative mt-2 block">
                  <select
                    value={form.barberId}
                    onChange={(event) => update("barberId", event.target.value)}
                    className={fieldClass}
                  >
                    <option value="any">No preference</option>
                    {barbers.map((barber) => (
                      <option key={barber.id} value={barber.id}>
                        {barber.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gold" />
                </span>
              </label>

              <label>
                <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Preferred date</span>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(event) => update("date", event.target.value)}
                  className={cn(fieldClass, "mt-2")}
                />
              </label>

              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-mist">Available time</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {demoSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      aria-pressed={form.time === slot}
                      onClick={() => update("time", slot)}
                      className={cn(
                        "border px-3 py-2 text-[12px] tracking-[0.14em] transition",
                        form.time === slot
                          ? "border-gold bg-gold text-charcoal"
                          : "border-white/15 text-ivory hover:border-gold",
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-mist">Demo slots — not live availability.</p>
              </div>

              <label>
                <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Your name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  className={cn(fieldClass, "mt-2")}
                />
              </label>

              <label>
                <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Phone number</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className={cn(fieldClass, "mt-2")}
                />
              </label>

              <label className="sm:col-span-2">
                <span className="text-[11px] uppercase tracking-[0.24em] text-mist">Additional notes</span>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(event) => update("notes", event.target.value)}
                  className={cn(fieldClass, "mt-2 resize-none")}
                />
              </label>

              {error ? (
                <p className="sm:col-span-2 text-sm text-gold" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-charcoal transition hover:bg-ivory sm:w-auto"
                >
                  Confirm on WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
