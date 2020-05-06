const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const guildKey = `${message.guild.id}`;

      if ( !( message.member.hasPermission( "ADMINISTRATOR" ) ) )  return message.reply( "You need to have the `ADMINISTRATOR` permission to run admin commands." );
      if (args.length == 0){
        let embed = new Discord.MessageEmbed()
          .setColor("#f2f8eb")
          .setTitle("Server Settings For : " + message.guild.name)
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription("Current Settings : ")
          .addField("Prefix", "```" + (client.guildStorage.get(guildKey, "prefix")) + "```", false)
          .addField("Announcement Channel", "```" + (client.guildStorage.get(guildKey, "announceChannel")) + "```", false)
          .addField("Autorole", "```" + (client.guildStorage.get(guildKey, "autorole")) + "```", false)
          .addField("Welcome-Message", "```" + (client.guildStorage.get(guildKey, "welcomeMessage")) + "```", false)
          .addField("Welcome-Channel", "```" + (client.guildStorage.get(guildKey, "welcomeChannel")) + "```", false)
          .setTimestamp()
          .setFooter(
            "Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username,
            client.user.avatarURL()
          );

        message.channel.send(embed);
      }else if (args[0].toLowerCase() == "prefix" ) {
          if (args.length == 1){
            message.channel.send("Please Specify a Prefix");
          }else if (args.length > 2){
            message.channel.send("Please make your prefix one line with no spaces");
          }else if (args.length = 2){
            client.guildStorage.set(guildKey, args[1], "prefix");
            message.channel.send("Set your prefix to " + args[1]);
          }
      }else if (args[0].toLowerCase() == "announce" ) {
        let channel = [args[1]]
        const channelID = channel.shift().slice(2,-1); // this is due to how channel mentions work in discord (they are sent to clients as <#462650628376625169>, this cuts off the first <# and the finishing >)
        if (channelID.length = 18) {
          client.guildStorage.set(guildKey, channelID, "announceChannel");
          message.channel.send("Set your announcement channel to " + args[1]);
        }else {
          return message.reply("Hrmm that doesn't seem to be a `#channel`. Please make sure you are using the `#channel`, and not the id")
        }
      }else if (args[0].toLowerCase() == "welcome-channel" ) {
        let channel = [args[1]]
        const channelID = channel.shift().slice(2,-1); // this is due to how channel mentions work in discord (they are sent to clients as <#462650628376625169>, this cuts off the first <# and the finishing >)
        if (channelID.length = 18) {
          client.guildStorage.set(guildKey, channelID, "welcomeChannel");
          message.channel.send("Set your welcome channel to " + args[1]);
        }else {
          return message.reply("Hrmm that doesn't seem to be a `#channel`. Please make sure you are using the `#channel`, and not the id")
        }
      }else if (args[0].toLowerCase() == "autorole" ) {
          if (message.guild.roles.cache.find(r=>r.name===(args.slice(1).join(" "))) != undefined) {
            message.channel.send("I will now give the role " + (args.slice(1).join(" ")) + " to new members! ```Please keep in mind if this role is deleted the autorole will not work, as well if I loose permission to give this role I will also not be able to use the autorole.```");
            client.guildStorage.set((guildKey), args.slice(1).join(" "), "autorole")
          }else {
            message.channel.send("Hrmm, that dosent seem to be a role on the server, please keep in mind this is Case Sensitive. ```Its also possible the role you are trying to give is above my role, please give me a role higher on the list then the role you want to give.```")
          }
      }else if (args[0].toLowerCase() == "welcome-message" ) {
          message.channel.send("I set the welcome message to : ``` " + (args.slice(1).join(" ")) + "```");
          client.guildStorage.set((guildKey), args.slice(1).join(" "), "welcomeMessage")
    }else if (args[0].toLowerCase() == "reset") {
      message.channel.send("Reset Guild Settings");
      client.guildStorage.delete(guildKey)
    }
}

exports.data = {
  name: "settings", // name of command used on lists etc...
  category: "Admin", // what category the command is in
  usage: "settings (field)", // how to use the command
  description: "Allows you to change server settings, can only be used by members with the `ADMINISTRATOR` permission", // description of what the command does
  field: "Prefix + (prefix to use) | Reset (Resets the prefix for the guild) | Announce + (#Channel) | Welcome-channel + (#channel) | Welcome-message + (message) --> use {users} to get the number of users, use {username} to get the username of who joined and use {mention} to mention the user who joined.", // for command with multiple args
  aliases: ["set", "setting"] // other ways to run the command
};