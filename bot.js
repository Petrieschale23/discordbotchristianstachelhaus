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
    	message.reply('Willkommen auf dem Chrisultra Discord du geile Schnitte, ich (Gott) wünsche dir viel Spaß auf dem Discord, bitte beachte die Regeln oder ich muss dich leider vernichten.');
    
    }
     
 
    if (message.content === 'Peter') {
    	message.reply('Fels');
    }
     if (message.content === 'Jay') {
    	message.reply('Salz');
    }
     if (message.content === 'Brammen') {
    	message.reply('B43');
    }
     if (message.content === 'Chris') {
    	message.reply('Hallöchen');
    }
     if (message.content === 'Gott') {
    	message.reply('Hallöchen');
    }
 

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
