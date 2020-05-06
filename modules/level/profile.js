const Discord = require("discord.js");
const config = require("./../../config.json");
const Canvas = require('canvas');
const canvas = require('canvas');

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.size) {
      user = message.mentions.users.first();
    } else if (args.id) {
      user = await message.guild.fetchMember(args.id);
      if (user) {
        user = user.user;
      }
    }
    if (!user) {
      user = message.author;
    }
    

    const canvas = Canvas.createCanvas(500, 500);
    const ctx = canvas.getContext("2d");

    // const background = await Canvas.loadImage(
    //   "https://cdn.glitch.com/e5cde8ca-91c4-46c0-b17a-c6b88690aa40%2FProfilepng.png?v=1585603381180"
    // );

    // const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
    // ctx.drawImage(avatar, 58, 100, 156, 156);
  
    // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // ctx.strokeStyle = "#74037b";
    // ctx.strokeRect(0, 0, canvas.width, canvas.height);

      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      let radius = 125;
        
      /* draw the grey circle */ 
      ctx.beginPath();
      ctx.moveTo(centerX, centerY); 
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fillStyle = "#ddd";
      ctx.fill();
      ctx.strokeStyle = "rgba(200, 208, 218, 0.66)";
      ctx.stroke();
      
    let percent = 80

      /* draw the green circle based on percentage */
      let startAngle = 1.5 * Math.PI;
      let unitValue = (Math.PI - 0.5 * Math.PI) / 25;
      if (percent >= 0 && percent <= 25) {
         endAngle = startAngle + (percent * unitValue);
      } else if (percent > 25 && percent <= 50) {
         endAngle = startAngle + (percent * unitValue);
      } else if (percent > 50 && percent <= 75) {
         endAngle = startAngle + (percent * unitValue);
      } else if (percent > 75 && percent <= 100) {
       endAngle = startAngle + (percent * unitValue);
      }
        
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
      ctx.closePath();
      ctx.fillStyle = "#2cb191";
      ctx.fill();

      
      // Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(250, 250, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

  const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
  ctx.drawImage(avatar, 150, 150, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);
};

exports.data = {
  name: "profile", // name of command used on lists etc...
  category: "Level", // what category the command is in
  usage: config.prefix + "profile @username", // used for help command i made - can be removed.
  description: "Profile showing level and stats for the mentioned user", // description of what the command does
  field: "None", // for command with multple args
  aliases: ["account", "stats"] // other ways to run the command
};
