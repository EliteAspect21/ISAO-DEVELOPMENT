const Discord = require('discord.js');
const fetch = require("node-fetch");


exports.run = async (client, message, args) => {
    const guildKey = `${message.guild.id}`;
    let link;

    let user = message.mentions.users.first();
    if (!user) {
        return message.reply("Hrmm, please mention a user after the command")
    }

    if (user.username == message.author.username) {
        return message.reply("Ouch thats lonely, please mention someone who isnt yourself.")
    }

    try {
    let results = await fetch(`https://nekos.life/api/v2/img/feed`)
    .then(res => res.json())
    .then(json => link = (json.url))

    let embed = new Discord.MessageEmbed()
    .setColor("#f2f8eb")
    .setTitle((message.author.username) + " Fed " + (user.username))
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
  name: "feed", // name of command used on lists etc...
  category: "Anime", // what category the command is in
  usage: "feed (`@username`)", // how to use the command
  description: "lets you feed a user!", // description of what the command does
  field: "(`@username`)", // for command with multiple args
  aliases: [] // other ways to run the command
};