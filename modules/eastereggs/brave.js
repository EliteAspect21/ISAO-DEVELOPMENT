const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const guildKey = `${message.guild.id}`;

  let embed = new Discord.MessageEmbed()
  .setColor("#f2f8eb")
  .setTitle("Brave")
  .setAuthor("Easter Egg 2/9")
  .setDescription(`[Brave.com/eli396](https://Brave.com/eli396)`)
  .setThumbnail("https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/g6p1w47fg2wy0ormm3lc")
  .setTimestamp()
  .setFooter("Server Prefix: " + (client.guildStorage.get(guildKey, "prefix")) + " • © " + client.user.username, client.user.avatarURL());
  
  client.users.cache.get(message.author.id).send(embed);
  if ((client.userStorage.get(key, "brave")) == false) {
    client.userStorage.set(key, true, "brave")
    client.users.cache.get(message.author.id).send("Easter Egg GET!");
  }else {
    client.users.cache.get(message.author.id).send("You already have this easter egg");
  }
}
exports.data = {
  name: "brave", // name of command used on lists etc...
  hidden: true, // Makes it not show up in the cmd command
  category: "Easter Eggs", // what category the command is in
  usage: "brave", // how to use the command
  description: "", // description of what the command does
  field: "None", // for command with multiple args
  aliases: [] // other ways to run the command
};
