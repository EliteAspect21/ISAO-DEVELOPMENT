const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const guildKey = `${message.guild.id}`;
    const key = `${message.author.id}`;

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("All The Way")
  .setAuthor("Easter Egg 1/9")
  .setDescription("NO, PLEASE DON'T")
  .setThumbnail("https://c-sf.smule.com/sf/s41/arr/1a/8d/5e2b1572-c2f2-4f23-9923-fd7abdafd8b0.jpg")
  .setTimestamp()
  .setFooter("Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);

  if ((client.userStorage.get(key, "atw")) == false) {
    client.userStorage.set(key, true, "atw")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}

exports.data = {
  name: "alltheway", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "alltheway", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
