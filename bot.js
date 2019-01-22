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
 
    if (message.content === 'Regel1') {
    	message.reply('1. Ihr verliert kein Wort über die #ChrisUltras'     
                      }
    if (message.content === 'Regel2') {
    	message.reply('2. Ladet jeden ein'     
                      }
     if (message.content === 'Regel3') {
    	message.reply('3. Ruft jmd "HALT, STOP!" heisst er Andreas'     
                      }
                       if (message.content === 'Regel4') {
    	message.reply('4. Kommentiert wird überall'     
                      }
                       if (message.content === 'Regel5') {
    	message.reply('5. Nur ein Kommentar/Video'     
                      }
                       if (message.content === 'Regel6') {
    	message.reply('6. Keine Hemden, keine Schuhe'     
                      }
                       if (message.content === 'Regel7') {
    	message.reply('7. Kommentare sind so lang, wie sie sein müssen'     
                      }
                       if (message.content === 'Regel8') {
    	message.reply('8. Wer neu ist, muss kommentieren');
    }


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
