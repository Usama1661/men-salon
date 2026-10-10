export const BOOKING_EVENT = "tgc:booking";

export type BookingSelection = {
  serviceId?: string;
  barberId?: string;
};

export function requestBooking(selection: BookingSelection) {
  window.dispatchEvent(
    new CustomEvent<BookingSelection>(BOOKING_EVENT, { detail: selection }),
  );
}
