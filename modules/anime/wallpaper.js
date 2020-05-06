const Discord = require('discord.js');
const fetch = require("node-fetch");


exports.run = async (client, message, args) => {
    const guildKey = `${message.guild.id}`;
    let link;

    try {
    let results = await fetch(`https://nekos.life/api/v2/img/wallpaper`)
    .then(res => res.json())
    .then(json => link = (json.url))

    let embed = new Discord.MessageEmbed()
    .setColor("#f2f8eb")
    .setTitle((message.author.username) + " here is your wallpaper! ")
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage(link)
    .setTimestamp()
    .setFooter(
      "Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username,
      client.user.avatarURL()
    );

  message.channel.send(embed);

    }
    catch (err) {console.log(err)
    return message.reply("Hrmm a error occurred")
    }    
}

exports.data = {
  name: "wallpaper", // name of command used on lists etc...
  category: "Anime", // what category the command is in
  usage: "wallpaper", // how to use the command
  description: "grabs a random image of a wallpaper", // description of what the command does
  field: "", // for command with multiple args
  aliases: [] // other ways to run the command
};