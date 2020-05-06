
exports.run = async (client, message, args) => {
    return message.reply("adding shortly...")
  }
  
  exports.data = {
    name: "unlock",// name of command used on lists etc...
    hidden: true, // Makes it not show up in the cmd command
    category: "Owner", // what category the command is in
    usage: "", // how to use the command
    description: "", // description of what the command does
    field: "", // for command with multiple args
    aliases: ["verify"] // other ways to run the command
  };
  