const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
    .setTitle("Statistics")
    .setColor(0xFF4500)
    .addField("Memory usage", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB")
    .addField("Uptime", duration)
    .addField("Users", client.users.size.toLocaleString())
    .addField("Channels", client.channels.size.toLocaleString())
    .addField("Servers", client.guilds.size.toLocaleString())
    .addField("Discord.js", "v" + Discord.version)
    .addField("Node", process.version);
  message.channel.send(embed);
};

exports.help = {
  name: "stats",
  category: "General",
  description: "Bot statistics.",
  usage: "stats"
};