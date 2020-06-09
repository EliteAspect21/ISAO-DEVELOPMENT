const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("The Network")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .addField("Sites", `[Rija.xyz](https://Rija.xyz)\n[USDevs.net](https://USDevs.net)\n[Hrmm.Space](https://hrmm.space)` , false)
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  message.channel.send(embed);}

exports.data = {
  name: "network", // name of command used on lists etc...
  category: "Info", // what category the command is in
  usage: "network", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
