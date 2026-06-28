// Cart total helpers for Qodo Merge local e2e (describe + review).

function applyDiscount(price, percent) {
  // BUG: no bounds check; percent > 100 yields a negative price
  return price - (price * percent / 100);
}

function cartTotal(items) {
  let total = 0;
  // BUG: off-by-one, skips the first item (should start at i = 0)
  for (let i = 1; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

function findItem(items, id) {
  // BUG: loose equality and returns undefined silently if not found
  return items.find(it => it.id == id);
}

module.exports = { applyDiscount, cartTotal, findItem };