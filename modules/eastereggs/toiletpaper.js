const Discord = require('discord.js');

exports.run = async (client, message, args, settings) => {

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Shutdown")
  .setAuthor("Easter Egg 7/9")
  .setDescription("***Sorry, we are out of Toilet Paper***")
  .setThumbnail("https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/roll-of-paper.png")
  .setTimestamp()
  .setFooter("Server Prefix: " + (settings.prefix) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);
  if ((client.userStorage.get(key, "tp")) == false) {
    client.userStorage.set(key, true, "tp")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}

exports.data = {
  name: "toiletpaper", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "toiletpaper", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
