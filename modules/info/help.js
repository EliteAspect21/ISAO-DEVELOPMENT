const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const guildKey = `${message.guild.id}`;

  var parts = message.content.split(" ");
  if (parts.length == 1) {
    const m = await message.channel.send({
      embed: {
        color: 1752220,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: "Help",
        description:
          "To get the list of commands, type `" +
          (client.guildStorage.get(guildKey, "prefix")) +
          "cmds`." +
          "\n\nNeed help or support with a specific command? Use ```" +
          (client.guildStorage.get(guildKey, "prefix")) +
          "help (Command)```",
        thumbnail: {
          url: client.user.displayAvatarURL
        },
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text:
            "Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username
        }
      }
    });
  } else if (parts.length == 2) {
    var fieldLowercase;

    var field = parts[1];
    fieldLowercase = field.toLowerCase();

    client.commands.forEach((val, key) => {      
      
      if (val.data.name == fieldLowercase || val.data.aliases.includes(fieldLowercase)) {
        
        if ( val.data.aliases.length >= 1) {
          let embed = new Discord.MessageEmbed()
          .setColor("#f2f8eb")
          .setTitle("Command Help For : " + val.data.name)
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription(val.data.description)
          .addField("Usage", "```" + val.data.usage + "```", false)
          .addField("Fields", "```" + val.data.field + "```", false)
          .addField("Aliases", "```" + val.data.aliases + "```", false)
          .setTimestamp()
          .setFooter(
            "Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username,
            client.user.avatarURL()
          );

        message.channel.send(embed);
    }else {
              let embed = new Discord.MessageEmbed()
          .setColor("#f2f8eb")
          .setTitle("Command Help For : " + val.data.name)
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription(val.data.description)
          .addField("Usage", "```" + val.data.usage + "```", false)
          .addField("Fields", "```" + val.data.field + "```", false)
          .addField("Aliases", "```None```", false)
          .setTimestamp()
          .setFooter(
            "Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username,
            client.user.avatarURL()
          );

        message.channel.send(embed);
    }
      }
    });
  } else {
    return message.reply(
      "That is the incorrect useage of m!help \n Example : `" +
      (client.guildStorage.get(guildKey, "prefix")) +
        "help` or `" +
        (client.guildStorage.get(guildKey, "prefix")) +
        "help (Command)`"
    );
  }
};

exports.data = {
  name: "help", // name of command used on lists etc...
  category: "Info", // what category the command is in
  usage: "help", // how to use the command
  description: "Shows the support server, as well lets you find out more info and how to use commands", // description of what the command does
  field: "None", // for command with multiple args
  aliases: ["h"] // other ways to run the command
};
