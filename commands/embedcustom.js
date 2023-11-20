const Discord = require('discord.js');
const client = new Discord.Client();

function createCustomEmbed(title, description, color, fields = [], footerText, footerIcon) {
  const embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle(title)
  .setDescription(description);

  fields.forEach(field => {
    embed.addField(field.name, field.value, field.inline);
  });

  if (footerText || footerIcon) {
    embed.setFooter(footerText, footerIcon);
  }

  return embed;
}

client.on('ready', () => {
  console.log(`${client.user.tag} logged in successfully`);
});

client.on('message', message => {
  if (message.content === '!embedMake') {
    const fieldArray = [
      { name: 'Field 1', value: 'Val 1', inline: true },
      {name: 'Field 2', value: 'Val 2', inline: true },
      { name: 'Field 3', value: 'Val 3', inline: false}
    ];
    const embed = createCustomEmbed(
      'Make your embed.',
      'You can make and customize your embed here',
      '#ff9900',
      fieldsArray,
      'Footer section',
      'https://i.imgur.com/AfFp7pu.png'
    );
});

client.login('BOT_TOKEN');
