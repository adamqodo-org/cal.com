/**
 * Apply a percentage-off coupon to an amount given in cents.
 * e.g. applyCouponDiscount(1000, 20) -> 800 (20% off $10.00).
 */
export function applyCouponDiscount(amountCents: number, percentOff: number): number {
  return amountCents - amountCents * percentOff;
}
