module.exports = (client, member) => {
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
};