const Discord = require('discord.js');
const config = require("./../../config.json");


exports.run = async (client, message, args) => {
  // Most of this command is identical to kick, except that here we'll only let admins do it.
      // In the real world mods could ban too, but this is just an example, right? ;)
      if ( !( message.member.hasPermission( "ADMINISTRATOR" ) ) ) 
      return message.reply( "You need to have the `ADMINISTRATOR` permission to run admin commands. test" );

      let member = message.mentions.members.first();
      if(!member)
        return message.reply("Please mention a valid member of this server");
      if(!member.bannable)
        return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
      message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}

exports.data = {
    name: "ban", // name of command used on lists etc...
    category: "Admin", // what category the command is in
    usage: "ban @username (Reason | Optional)", // how to use the command
    description: "Bans a user from the server its used in, can only be used by members with the `ADMINISTRATOR` permission", // description of what the command does
    field: "(Reason | Optional)", // for command with multiple args
    aliases: [] // other ways to run the command
  };
  