const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Yeet")
  .setAuthor("Easter Egg 9/9")
  .setDescription("👌")
  .setThumbnail("https://a.wattpad.com/useravatar/TheOfficialYeet.256.471240.jpg")
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);
  if ((client.userStorage.get(key, "yeet")) == false) {
    client.userStorage.set(key, true, "yeet")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}
exports.data = {
  name: "yeet", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "yeet", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
