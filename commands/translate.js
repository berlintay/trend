const Discord = require('discord.js');
const translate = require('google-translate-api');


const client = new Discord.Client();
const prefix = ',';

client.on('message', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(`${prefix}trl`)) {
        const textToTranslate = message.content.slice(`${prefix}trl`.length).trim();

        if (!textToTranslate) {
            return message.reply('Provide the text to translate.');
        }

        try {
            const translatedText = await translate(textToTranslate, {to: 'en' });

            message.channel.send(`${translatedtext.text}`);

        } catch (error) {
            console.error('Translation ERROR', error);
            message.reply('Error translating message. Please try again');
        }    
    }

    if (message.content.startsWith(`${prefix}trl`)) {
        const messageID = message.content.slice(`${prefix}trl`.length).trim();
        if (!messageID) {
            return message.reply('What is the message ID?');
        }

        try {
            const fetchedMessage = await message.channel.messages.fetch(messageID);
            const textToTranslate = fetchedMessage.content;

            const translatedText = await translate(textToTranslate, { to: 'en' });

            message.channel.send(`${translatedText.text}`);
        } catch (error) {
            console.error('Translation ERROR:', error);
            message.reply('Error translating text please try again.');
        }
    }
});

client.login('BOT_TOKEN');