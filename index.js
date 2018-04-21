const Discord = require('discord.js-commando');
const gcbot = new Discord.Client();

gcbot.registry.registerGroup('clockwork', 'The Great Clockwork');
gcbot.registry.registerDefaults();
gcbot.registry.registerCommandsIn(__dirname + "/commands")

gcbot.login('NDM2NzA2NTY5NTY5NDM1Njc4.Dbrb7Q.1iBpzZ5c9V1pMc43zQWC4DnGMQs');