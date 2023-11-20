const { Client, Intents } = require('discord.js);
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`luh nig ${client.user.tag} flew in Module clear`);
  });

client.on('message', async (message) => {
// gotta start it w the prefix ",clear"
if (message.content.startsWith(',clear')) {
    // split that shiii
    const arg = message.content.split(' ');

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('missing `MANAGE_MEMBERS` nice try gg');

      // input the length arg
    if (ars.length !== 2 || isNaN[1])) {
        return message.reply('how many u tryna delete');
      }
      const numberMsgDel = Math,min(numberMsgDel, 20); 
      <!---- 20 cap ----!>

      try {
        const fetchedMessages = await message.channel.messags.fetch({
          limit: cappedNumberOfMessages + 1; 
          <!--n +1 type shi ----!>

        });

        const userMessages = fetchedMessages.filter((msg) => mesg.author.id === message.id);
  // Del filtered msg 

        await message.channel.bulkDelete(userMesages);

        // confirm to the mf 
        message.reply({ content: `you have deleted ${userMessages.size} messages.`, ephemeral: true});
      }
    } catch (error) {
    console.error('shit aint work bro', error);
      message.reply('ay shit aint working cuh, try again');
    

    }
  }
});

client.login('BOT_TOKEN');
