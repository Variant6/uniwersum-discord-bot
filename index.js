const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('OTk4NTQ4NzE1NzI1OTE4MzI5.Gz24t9.kgmquLRSjsWE2Ier9cRU4WC8ZsVEsHok--GHrQ');