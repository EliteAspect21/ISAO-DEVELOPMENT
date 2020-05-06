
exports.run = async (client, message, args) => {
    const guildKey = `${message.guild.id}`;

    console.log(client.guildStorage.get(guildKey, "announceChannel"))

    if ((client.guildStorage.get(guildKey, "announceChannel")).length == 18) {
    const guildKey = `${message.guild.id}`;
    const sayMessage = args.join(` `);
    message.delete().catch(O_o=>{});
    var res = sayMessage.replace(/{everyone}/g, "@everyone");

    client.channels.cache.get(client.guildStorage.get(guildKey, "announceChannel")).send(res);
    }else {
        return message.reply("Hrmm it seems you have no announcement channel set up, please configure this in the settings command")
    }
  }
  
  exports.data = {
    name: "announce",// name of command used on lists etc...
    hidden: true, // Makes it not show up in the cmd command
    category: "Owner", // what category the command is in
    usage: "announce (Message)", // how to use the command
    description: "Talks through the bot and sends a announcement in the announcement channel specified in the settings, can only be used by the bot owner themselves", // description of what the command does
    field: "(message) | Use {everyone} in the message for it to be replaced with a [@]everyone", // for command with multiple args
    aliases: [] // other ways to run the command
  };
  