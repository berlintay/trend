const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD, Intents.FLAGS.BANS ]});


const prefix = ',';

client.once('ready', () => {
  console.log(`${client.user.tag} Online module ban.`);
});


client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix) || message.author.bot) return;
  const command = args.shift().toLowerCase();

  if (command === 'ban') {
    if (!member) {
      return.message.reply('Who you trying to ban?');
    }
    try {
      await.member.ban();
      message.reply('${member.user.tag} banned.');
    } catch (error) {
      console.error('Error banning member:', error);
      message.reply('There was an error banning dude.');
    }
  }
});


client.login('BOT_TOKEN');
