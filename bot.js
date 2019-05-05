const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
 
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "fuck")) {
    message.channel.send("NO, IM THE ONLY ONE WHO CAN SAY FUCK!!");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("```General Commands``` **!ping, !help** ```Fun Commands``` **!fuck, !amigay** ```Moderation Commands``` coming **__very__** soon");
  } else
  if (message.content.startsWith(prefix + "amigay")) {
    message.channel.send("You are 23% **gay**");
  } else
   client.on("message", (message) => {
    if (message.content.startsWith(prefix + "kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
