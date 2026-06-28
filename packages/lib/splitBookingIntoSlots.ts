/**
 * Split a booking window into `slotCount` equal, back-to-back time slots.
 *
 * Returns the start time of each slot. For a 60-minute window split into 4,
 * callers expect exactly 4 start times: [00:00, 00:15, 00:30, 00:45].
 */
export function splitBookingIntoSlots(start: Date, end: Date, slotCount: number): Date[] {
  const windowMs = end.getTime() - start.getTime();
  const stepMs = windowMs / slotCount;

  const slots: Date[] = [];
  for (let i = 0; i <= slotCount; i++) {
    slots.push(new Date(start.getTime() + stepMs * i));
  }
  return slots;
}
