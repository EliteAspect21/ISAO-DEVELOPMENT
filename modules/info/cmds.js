const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let commandEmbed = new Discord.MessageEmbed()
.setColor("#1ABC9C")
.setTitle("Commands List")
// .setDescription("`[ ]` = required `ADMINISTRATOR` permission. \n<  > = Command is Dissabled. \n {  } = Guild owner only.")
.setAuthor(client.user.username, client.user.avatarURL())
.setTimestamp()
.setFooter("Server Prefix: " + (settings.prefix) + " • © " + (client.user.username), client.user.avatarURL())
      
      let cmds = {}; 
    client.commands.forEach( ( val, key ) => {
   if ( val.data.hidden ){
   }else if ( cmds[ val.data.category ] === undefined) {
    cmds[ val.data.category ] = [ key ]; 
    } else {
        cmds[ val.data.category ].push( key ); 
    }
    });
  
  // if ( val.data.hidden != true )
  
for (let cmd in cmds) {
  commandEmbed.addField(cmd, cmds[cmd].toString().split(",").join(" / "))
}
  message.channel.send(commandEmbed)
  
}

exports.data = {
  name: "cmds", // name of command used on lists etc...
  category: "Info", // what category the command is in
  usage: "cmds", // how to use the command
  description: "Lists all commands as well as their categories", // description of what the command does
  field: "None", // for command with multiple args
  aliases: ["cmd", "commands", "command"] // other ways to run the command
};
