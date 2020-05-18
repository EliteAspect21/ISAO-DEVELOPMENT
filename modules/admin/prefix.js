exports.run = async (client, message, args, settings) => {

    if (args[0] == undefined) {
        message.channel.send(`Current prefix: \`${settings.prefix}\``);
    }else if (args[0] != undefined) {

    let updated = args.slice(0).join(' ');
    try {
        await client.updateGuild(message.guild, { prefix: updated });
        return message.channel.send(`Prefix has been updated to: \`${updated}\``);
    } catch (error) {
        console.error(error);
        message.channel.send(`An error occurred: **${error.message}**`);
    }
    }
}

exports.data = {
    name: "prefix", // name of command used on lists etc...
    category: "Admin", // what category the command is in
    usage: "prefix (new prefix)", // how to use the command
    description: "Updates the server prefix, can only be used by members with the `ADMINISTRATOR` permission", // description of what the command does
    field: "(Prefix)", // for command with multiple args
    aliases: [] // other ways to run the command
  };
  