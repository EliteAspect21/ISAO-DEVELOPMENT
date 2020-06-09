const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Nani?!?!")
  .setAuthor("Easter Egg 4/9")
  .setDescription("omae wa mou shindeiru")
  .setThumbnail("https://cdn130.picsart.com/298788397291201.jpg?type=webp&to=crop&r=256")
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);
  if ((client.userStorage.get(key, "nani")) == false) {
    client.userStorage.set(key, true, "nani")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}
exports.data = {
  name: "nani", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "nani", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
