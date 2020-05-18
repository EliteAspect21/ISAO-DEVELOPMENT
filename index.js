const Enmap = require("enmap");
const fs = require("fs");
const modules = "./modules/";
const config = require("./config.json");
const { Client, Collection } = require('discord.js');
const client = new Client();
require('./utils/functions')(client);
require('dotenv-flow').config();


client.mongoose = require('./utils/mongoose');
client.config = require('./config');


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
client.mongoose.init();
