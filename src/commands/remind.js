const { parseDuration } = require('../utils/parseDuration');

module.exports = async function remind(msg, args) {
  const ms = parseDuration(args[0] || '');
  if (!ms) return msg.reply('usage: !remind 10m go get chai');
  const what = args.slice(1).join(' ') || 'chai';
  // TODO: reminders vanish when the bot restarts, save them somewhere
  // TODO: let people cancel a reminder
  setTimeout(() => msg.reply(`⏰ ${what}`), ms);
  return msg.react('👍');
};
