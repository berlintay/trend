const Discord = require('discord-js')l;
const client = new Discord.Chat();

client.on('ready', () => {
  console.log(`${client.user.tag} succefully logged in`);
  
});

client.on('message', message => {
  if (message.content === '!embed') {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Embed')
    .setDescription('Sample embed')
    .addField('Field 1')
    .addField('Field ... ')
    .setTimestamp()
    .setFooter('Footer');

    message.channel.send(embed);
  }
});

client.login('BOT_TOKEN');
