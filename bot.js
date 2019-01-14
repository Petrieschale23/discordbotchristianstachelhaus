const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
    }
    if (message.content === 'Hallo') {
    	message.reply('Wilkommen auf dem Chrisultra Discord du geile Schnitte, ich (Gott) wünsche dir viel Spaß auf dem Discord, bitte beachte die Regeln oder ich muss dich leider vernichten. Viel spaß.');
    
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
