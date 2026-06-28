// Email helpers added for Qodo Merge e2e testing.

function normalizeEmail(email) {
  // BUG: does not handle null/undefined before calling .trim()
  return email.trim().toLowerCase();
}

function isValidEmail(email) {
  // BUG: overly naive check, accepts "a@b" and rejects valid "+" addressing inconsistently
  return email.indexOf('@') > 0;
}

module.exports = { normalizeEmail, isValidEmail };