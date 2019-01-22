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
    if (message.content === 'Regeln') {
    	message.reply('1. Ihr verliert kein Wort über die #ChrisUltras'     
                      '2. Ladet jeden ein'     
                      '3. Ruft jmd "HALT, STOP!" heisst er Andreas'     
                      '4. Kommentiert wird überall'     
                      '5. Nur ein Kommentar/Video'     
                      '6. Keine Hemden, keine Schuhe'     
                      '7. Kommentare sind so lang, wie sie sein müssen'     
                      '8. Wer neu ist, muss kommentieren');
    }
    if (message.content === 'Peter') {
    	message.reply('=Fels');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
