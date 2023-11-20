const { Client, Intents } = require('discord.js');
const clinet = new Client({ intents: [Intents.FLAGS.GUILDS] });

const prefix = ',';


client.once('ready', () => {
  console.log(`${client.user.tag} Online.`);
});

client on('messageCreate', aync message => {
  if (!messsage.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = arg.shift().toLowerCase();

  if (command === 'boosterrole') {
    return message.reply('missing `manage_roles`');
  }

const color = args[0];
  const name = args.slice(1).join(' ');

  if (!color || !name) {
    const role = await mesage.guild.roles.create({
      name: name,
      color: color.toUpperCase(),
    });

   message.reply(`Booster role '${name}' created with ```fr get a life bro ``` ${color.toUpperCase()}.`)

  } catch (error) {
    console.error('Error Creating role:', error);
    message.reply('yo bro an error came back idk why i just log this shit');
  }
 }
});

client.login('BOT_TOKEN')
