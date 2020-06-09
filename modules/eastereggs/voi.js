const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Voi")
  .setAuthor("Easter Egg 8/9")
  .setDescription("***Are you an eevee?***\nI think not")
  .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/eevee-eievui-pokemon-cartoon-game-video-pokemongo-32216.png")
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);
  if ((client.userStorage.get(key, "voi")) == false) {
    client.userStorage.set(key, true, "voi")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}
exports.data = {
  name: "voi", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "voi", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
