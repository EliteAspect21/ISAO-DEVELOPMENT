
exports.run = async (client, message, args) => {
  const userID = args.shift().slice(3,-1); // this is due to how channel mentions work in discord (they are sent to clients as <#462650628376625169>, this cuts off the first <# and the finishing >)
  const sayMessage = args.join(` `);
  message.delete().catch(O_o=>{});
  client.users.cache.get(userID).send(sayMessage);
}

exports.data = {
  name: "dm",// name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Owner", // what category the command is in
  usage: "dm (`@user` to send it to) (Message)", // how to use the command
  description: "Talks through the bot and sends dms to the specified user, can only be used by the bot owner themselves", // description of what the command does
  field: "(`@user` to send it to) (Message)", // for command with multiple args
  aliases: [] // other ways to run the command
};
