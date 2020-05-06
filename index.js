const Enmap = require("enmap");
const fs = require("fs");
const modules = "./modules/";
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(
    `With ${client.users.cache.size} users!`
  );
});



client.on('guildMemberAdd', member => {
  // console.log('user' + member.username + ' joined the battle!');
  const guildKey = `${member.guild.id}`;
  let sayMessage = client.guildStorage.get(guildKey, "welcomeMessage")
  var res = sayMessage.replace(/{users}/g, (member.guild.memberCount));
  var res2 = res.replace(/{username}/g, (member.user.username));
  var res3 = res2.replace(/{mention}/g, ("<@" + member.user.id + ">"));

  client.channels.cache.get(client.guildStorage.get(guildKey, "welcomeChannel")).send(res3);

  if ((client.guildStorage.get(guildKey, "autorole")) != "none") {

      if (member.guild.roles.cache.find(r => r.name === (client.guildStorage.get(guildKey, "autorole"))) != undefined) {
      var role = member.guild.roles.cache.find(r => r.name === (client.guildStorage.get(guildKey, "autorole")));
      member.roles.add(role)
      
      }else {
        console.log("Tried to give a role to a new user, but the role defined in settings is missing or removed, please run settings autorole (new role)")
      }

}
});



client.login(config.token);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.commands = new Enmap();
client.aliases = new Enmap();
client.guildStorage = new Enmap({ name: "guildStorage", ensureProps: true});

async (message) => {
client.guildStorage.ensure(`${message.guild.id}`, {
  prefix: "?",
  announceChannel: "",
  autorole: "none",
  welcomeMessage: "",
  welcomeChannel: "",
});
}

fs.readdirSync(modules).forEach(file => {
  fs.readdir(`./modules/${file}/`, (err, files) => {
    if (err) return console.error(err);

    let jsFile = files.filter(f => f.split(".").pop() === "js");
    if (jsFile.length <= 0) {
      return console.log("Couldn't find any commands.");
    }
    jsFile.forEach(f => {
      let pull = require(`./modules/${file}/${f}`);
      client.commands.set(pull.data.name, pull);
      pull.data.aliases.forEach(alias => {
        client.aliases.set(alias, pull.data.name);
      });
    });
  });
});
