// Slug helpers added to view the restyled agentic describe output.

function slugify(text) {
  // BUG: doesn't trim leading/trailing dashes
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function truncateSlug(slug, max) {
  // BUG: off-by-one, keeps max+1 chars
  return slug.slice(0, max + 1);
}

module.exports = { slugify, truncateSlug };