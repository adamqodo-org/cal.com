// String helpers for Qodo Merge local e2e run.

function truncate(text, max) {
  // BUG: off-by-one — slices to max+1 chars
  return text.length > max ? text.slice(0, max + 1) + '…' : text;
}

function titleCase(s) {
  // BUG: only capitalizes the first word, not each word
  return s.charAt(0).toUpperCase() + s.slice(1);
}

module.exports = { truncate, titleCase };