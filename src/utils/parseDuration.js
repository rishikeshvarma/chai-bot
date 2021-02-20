// Turns "90s", "10m", "1h30m" or "2d" into milliseconds. Returns null when the
// text is not a duration, so callers can show a usage hint.
const UNITS = { s: 1000, m: 60 * 1000, h: 60 * 60 * 1000, d: 24 * 60 * 60 * 1000 };

function parseDuration(text) {
  if (typeof text !== 'string') return null;
  const parts = text.trim().toLowerCase().match(/(\d+)\s*([smhd])/g);
  if (!parts || parts.join('').replace(/\s/g, '') !== text.trim().toLowerCase().replace(/\s/g, '')) return null;
  return parts.reduce((ms, part) => {
    const [, n, unit] = part.match(/(\d+)\s*([smhd])/);
    return ms + Number(n) * UNITS[unit];
  }, 0);
}

module.exports = { parseDuration };
