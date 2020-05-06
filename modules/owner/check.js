
exports.run = async (client, message, args) => {
    const key = `${message.author.id}`;
    
    message.channel.send("User Storage" + "```" + JSON.stringify(client.userStorage.get(key)) + "```")
  
  }
  
  exports.data = {
    name: "check",// name of command used on lists etc...
    hidden: true, // Makes it not show up in the cmd command
    category: "Owner", // what category the command is in
    usage: "check", // how to use the command
    description: "", // description of what the command does
    field: "", // for command with multiple args
    aliases: [] // other ways to run the command
  };
  