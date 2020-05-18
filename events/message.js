const config = require("./../config.json");
const Enmap = require("enmap");

module.exports = async (client, message) => {
  
  // Ignore all bots and non-guilds
  if (!message.guild || message.author.bot) return;

  let settings;
  try {
      settings = await client.getGuild(message.guild);
  } catch (error) {
      console.error(error);
  }

  let prefix = (settings.prefix)

  // Ignore messages not starting with the prefix
  if (message.content.indexOf(settings.prefix) !== 0)return

  // Our standard argument/command name definition.
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  if (!message.member.hasPermission("ADMINISTRATOR") && cmd.data.category === "Admin") {
    return message.reply("You need to have the `ADMINISTRATOR` permission to run admin commands.");
  }

  if (message.author.id !== `396385154647588866` && cmd.data.category === "Owner") {
    if (message.author.id !== `280885861984239617` && cmd.data.category === "Owner") {
      return message.reply("You're not the boss of me, only the owner of the bot can do that!");
    }  }

  const responce = [
    "Go Away. `Sorry, but the user EliteAspect21 needs to have admin for this command to work`",
    "You are not the boss of me. `Sorry, but the user EliteAspect21 needs to have admin for this command to work`",
    "\*Hiss\*. `Sorry, but the user EliteAspect21 needs to have admin for this command to work`",
    "**I SHALL SMITE YOU**. `Sorry, but the user EliteAspect21 needs to have admin for this command to work`",
    "Thou shall be killed if you don't go away. `Sorry, but the user EliteAspect21 needs to have admin for this command to work`",
    "I swear to god. `Sorry, but the user EliteAspect21 needs to have admin for this command to work`",
];


  if(message.guild.member("396385154647588866")) {
  if(!message.guild.members.cache.get("396385154647588866").hasPermission('ADMINISTRATOR') && cmd.data.category === "Anime") return message.reply(responce[~~(Math.random()*responce.length)]);

  if(!message.guild.members.cache.get("396385154647588866").hasPermission('ADMINISTRATOR') && cmd.data.category === "NSFW") return message.reply(responce[~~(Math.random()*responce.length)]);

  }else {
    console.log("not in server")

    if(cmd.data.category === "Anime") return message.reply(responce[~~(Math.random()*responce.length)]);

    if(cmd.data.category === "NSFW") return message.reply(responce[~~(Math.random()*responce.length)]);  }
  // Run the command
  cmd.run(client, message, args, settings);
};
