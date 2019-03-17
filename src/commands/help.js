const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
      .setTitle("PokeAssistant Help")
      .setDescription("Use `help <command>` for details.")
      .setColor(0xFF4500)
      .addField("Legend", "`<arg>` Compulsory argument\n`[arg]` Optional argument");
  
  let generalArr = [],
      debugArr = [];
      //otherArr = [];
        
  client.cmdhelp.filter(cmd => cmd.category === "General").forEach((cmd) => {generalArr.push(cmd.name)});
  client.cmdhelp.filter(cmd => cmd.category === "Debug").forEach((cmd) => {debugArr.push(cmd.name)});
  //client.cmdhelp.filter(cmd => cmd.category === 'Other').forEach((cmd) => {otherArr.push(cmd.name)});
  
  embed
    .addField("General", generalArr.map(g => g).join('\n'), true)
    .addField("Debug", debugArr.map(g => g).join('\n', true));
  
  if (!args[0]) {
    message.channel.send(embed);
  } else {
    let cmd = client.cmdhelp.filter(cmd => cmd.name === args[0]).first();
    let cmdEmbed = new Discord.RichEmbed()
      .setColor(0xFF4500);
    
    if (!cmd) {
      embed
        .setTitle("Command Not Found")
        .setDescription("Please see `help` for a list of commands.");
      
      return message.channel.send(cmdEmbed);
    }
    
    cmdEmbed
      .setTitle(cmd.name.charAt(0).toUpperCase() + cmd.name.substr(1))
      .setDescription(cmd.description)
      .addField("Usage", "```" + cmd.usage + "```");
    
    message.channel.send(cmdEmbed);
  }
};

exports.help = {
  name: "help",
  category: "General",
  description: "Displays all the commands, or specify a command for details.",
  usage: "help [command]"
};