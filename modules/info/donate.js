const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Donate to Isao")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .setDescription('Welcome! We are creating the bot to rule Discord. Isao will be jam packed full of cool and amazing features, like Easter eggs, basic moderation, and server economy! By funding us, you will help Isao become the bot to rule the worl.. I mean, Discord!')
  .addField("Support Isao's Development", `[Patreon](https://www.patreon.com/IsaoDevs)` , false)
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  message.channel.send(embed);
}

exports.data = {
  name: "donate", // name of command used on lists etc...
  category: "Info", // what category the command is in
  usage: "donate", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
