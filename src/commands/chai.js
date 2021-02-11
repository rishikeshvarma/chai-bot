const ORDERS = ['cutting chai', 'masala chai', 'irani chai', 'ginger chai', 'sulaimani'];

module.exports = async function chai(msg, args) {
  const who = args.length ? args.join(' ') : msg.author.username;
  const order = ORDERS[Math.floor(Math.random() * ORDERS.length)];
  // TODO: remember everyone's favourite order
  return msg.channel.send(`☕ one ${order} for ${who}`);
};
