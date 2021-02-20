require('dotenv').config();
const Discord = require('discord.js');
const chai = require('./commands/chai');
const quote = require('./commands/quote');
const remind = require('./commands/remind');
const { onCooldown } = require('./utils/cooldown');

const client = new Discord.Client();
const PREFIX = '!';

client.on('ready', () => {
  console.log(`chai-bot online as ${client.user.tag}`);
});

client.on('message', async (msg) => {
  if (msg.author.bot || !msg.content.startsWith(PREFIX)) return;
  const [cmd, ...args] = msg.content.slice(PREFIX.length).trim().split(/\s+/);
  if (onCooldown(msg.author.id, cmd, 5000)) return msg.react('⏳');
  if (cmd === 'chai') return chai(msg, args);
  if (cmd === 'quote') return quote(msg, args);
  if (cmd === 'remind') return remind(msg, args);
  // TODO: !help
});

client.login(process.env.DISCORD_TOKEN);
