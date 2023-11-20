const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.MESSAGE_DELETE] });

const prefix = ',';
const snipedMessages = {};

client.once('ready', () => {
  console.log(`${client.user.tag} Online Module Snipe_message`);
});

client.on('messageDelete', message => {
  const { guild, channel, content, author } = message;
  if (!guild || !channel || author.bot) return;

  snipedMessages[channel.id] = {
    content,
    author,
    timestamp: new Date().toLocaleString(),
  };
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'snipe') {
    const snipedMessage = snipedMessages[message.channel.id];
    if (!snipedMessage || !snipedMessage.content) {
      return message.reply('Nothing to snipe!');
    }

    const { content, author, timestamp } = snipedMessage;
    message.channel.send(`Sniped: "${content}" author: ${author.tag} at ${timestamp}`);
  }
});

client.login('BOT_TOKEN');
