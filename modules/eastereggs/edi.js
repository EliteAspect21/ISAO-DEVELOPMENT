const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const guildKey = `${message.guild.id}`;

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Edi")
  .setAuthor("Easter Egg 3/9")
  .setDescription("\"Stealf\"")
  .setThumbnail("https://m.media-amazon.com/images/I/51WxRAfOj0L._AA256_.jpg")
  .setTimestamp()
  .setFooter("Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);
  if ((client.userStorage.get(key, "edi")) == false) {
    client.userStorage.set(key, true, "edi")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}
exports.data = {
  name: "edi", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "edi", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
