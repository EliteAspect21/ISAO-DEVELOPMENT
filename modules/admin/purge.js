const Discord = require('discord.js');


exports.run = async (client, message, args) => {
      if ( !( message.member.hasPermission( "ADMINISTRATOR" ) ) ) 
      return message.reply( "You need to have the `ADMINISTRATOR` permission to run admin commands. test" );
  // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = (parseInt(args[0], 10) + 1);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 99 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.messages.fetch({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

}

exports.data = {
  name: "purge", // name of command used on lists etc...
  category: "Admin", // what category the command is in
  usage: "purge (number of messages | 1 to 99 )", // how to use the command
  description: "Mass deletes the messages in the channel its used in, can only be used by members with the `ADMINISTRATOR` permission", // description of what the command does
  field: "(number of messages | 1 to 99 )", // for command with multiple args
  aliases: ["clean", "c"] // other ways to run the command
};