const Discord = require('discord.js');
const fetch = require("node-fetch");


exports.run = async (client, message, args, settings) => {
    let link;

    if (!message.channel.nsfw) {
        message.reply('Your request must be in a nsfw channel.')
      }else {

    try {
    let results = await fetch(`https://nekos.life/api/v2/img/hentai`)
    .then(res => res.json())
    .then(json => link = (json.url))

    let embed = new Discord.MessageEmbed()
    .setColor("#f2f8eb")
    .setTitle("Here ya go :P")
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage(link)
    .setTimestamp()
    .setFooter(
      "Server Prefix: " + (settings.prefix) + " • © " + client.user.username,
      client.user.avatarURL()
    );

  message.channel.send(embed);

    }
    catch (err) {console.log(err)
    return message.reply("Hrmm a error occurred")
    }    
}
}

exports.data = {
  name: "hentai", // name of command used on lists etc...
  category: "NSFW", // what category the command is in
  usage: "hentai", // how to use the command
  description: "Grabs a random hentai image", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};