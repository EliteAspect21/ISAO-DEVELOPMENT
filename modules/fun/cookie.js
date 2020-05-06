const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    return message.reply("Here is your cookie! :cookie:")
}

exports.data = {
  name: "cookie", // name of command used on lists etc...
  category: "Fun", // what category the command is in
  usage: "cookie", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
