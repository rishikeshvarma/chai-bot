// Per-user, per-command cooldowns, so one person can't spam a command.
// Usage: if (onCooldown(userId, 'chai', 5000)) return;
const last = new Map();

function onCooldown(userId, command, ms) {
  const key = `${userId}:${command}`;
  const now = Date.now();
  const prev = last.get(key) || 0;
  if (now - prev < ms) return true;
  last.set(key, now);
  return false;
}

function resetCooldowns() {
  last.clear();
}

module.exports = { onCooldown, resetCooldowns };
