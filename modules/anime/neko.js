const Discord = require('discord.js');
const fetch = require("node-fetch");


exports.run = async (client, message, args, settings) => {
    let link;

    try {
    let results = await fetch(`https://nekos.life/api/v2/img/neko`)
    .then(res => res.json())
    .then(json => link = (json.url))

    let embed = new Discord.MessageEmbed()
    .setColor("#f2f8eb")
    .setTitle((message.author.username) + " here is your neko! ")
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

exports.data = {
  name: "neko", // name of command used on lists etc...
  category: "Anime", // what category the command is in
  usage: "neko", // how to use the command
  description: "grabs a random image of a neko", // description of what the command does
  field: "", // for command with multiple args
  aliases: [] // other ways to run the command
};