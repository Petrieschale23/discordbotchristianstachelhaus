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
    	message.reply('1. Ihr verliert kein Wort über die #ChrisUltras   2. Ladet jeden ein      3. Ruft jmd "HALT, STOP!" heisst er Andreas 4. Kommentiert wird überall 5. Nur ein Kommentar/Video 6. Keine Hemden, keine Schuhe 7. Kommentare sind so lang, wie sie sein müssen 8. Wer neu ist, muss kommentieren');
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
     if (message.content === 'Niklas') {
    	message.reply('Schwul!!!!!!!');
    }
     if (message.content === 'Leon') {
    	message.reply('Göttlicher Pferdeschwanz!!!!!');
    }
    if (message.content === 'Avatar') {
        message.reply(message.author.displayAvatarURL());
    }
    if (message.content === 'wie gehts') {
    	message.reply('gut, dir?');
    }
    if (message.content === 'sehr gut') {
    	message.reply('das freut mich doch du süßer');
    } 
if (message.content === 'sex mit kleinen kindern') {
    	message.reply('AJAJAJAJAJAJAJAJAJAAJJEEEEEEEEEEEEEEEEEEEEEE');
    }
if (message.content === 'Frau Löser') {
    	message.reply('schmemscht!!!');
    }
if (message.content === 'Frau Schubert') {
    	message.reply('schmescht nicht!!!');
    }
 if (message.content === 'Hi') {
    	message.reply('Arschaids!!!!!!!');
    }
if (message.content === 'Ey Fotze') {
    	message.reply('zeig dein Arsch!!!')
}
    if (message.content === 'Finch Asozial') {
    	message.reply('auf Weiberjagd!!!');
    }
if (message.content === 'MDMA') {
     message.reply('MDMA steht für die chirale chemische Verbindung 3,4-Methylendioxy-N-methylamphetamin. Es gehört strukturell zur Gruppe der Methylendioxyamphetamine und ist insbesondere weltweit verbreitete als Droge um Rentnerinnen klar zu machen.');
}
});
   
   client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.find(ch => ch.name === 'member-log');
   if (!channel) return;
   channel.send(`Welcome to the server, ${member}`);
   });
   



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
