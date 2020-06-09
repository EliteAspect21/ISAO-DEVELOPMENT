const Discord = require('discord.js');
const moment = require("moment");

exports.run = async (client, message, args, settings) => {
  require("moment-duration-format");

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Bot Info")
  .setAuthor(client.user.username, client.user.avatarURL())
  .addField("Stats", ("Total Users : " + client.users.cache.size + "\nTotal Channels : " + client.channels.cache.size + "\nTotal Guilds : " + client.guilds.cache.size), false)
  .addField("Creators", `[Kamiko](https://hrmm.space) - Bot Dev \n[EliteAspect21](https://USDevs.net) - Bot Dev` , false)
  .addField("Patreon", `[Click Here](https://www.patreon.com/IsaoDevs)` , false)
  .addField("Last Restarted", "Bot last restarted on " + moment(Date.now() - client.uptime).format('LLLL') , false)
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  message.channel.send(embed);

}
exports.data = {
  name: "botinfo", // name of command used on lists etc...
  category: "Info", // what category the command is in
  usage: "botinfo", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
