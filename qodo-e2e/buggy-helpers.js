// Small utility helpers added for Qodo Merge e2e review testing.
// Intentionally contains a few minor bugs.

function divide(a, b) {
  // BUG: no guard for b === 0 (returns Infinity / NaN)
  return a / b;
}

function getFirstItem(arr) {
  // BUG: returns the SECOND element, not the first
  return arr[1];
}

function isSameUser(a, b) {
  // BUG: loose equality can coerce types unexpectedly
  return a.id == b.id;
}

async function fetchUserName(client, id) {
  // BUG: missing await -> returns a Promise, not the name
  const user = client.getUser(id);
  return user.name;
}

module.exports = { divide, getFirstItem, isSameUser, fetchUserName };