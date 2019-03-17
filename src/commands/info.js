const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("Information")
    .setColor(0xFF4500)
    .setDescription("PokeAssistant is a bot aimed to help Pokecord players. It will tell you what Pokemon it is whenever Pokecord spawns one. As such, you no longer have to rack your brains or even search Google. Sometimes, you may just miss a rare Pokemon like this.")
    .addField("Developer", "<@446290930723717120>")
    .addField("How does it work?", "All the images from Pokecord are hashed into short strings, and stored in our database. When Pokecord spawns a Pokemon, PokeAssistant will hash it, then compare with the database and retrieve the name of the Pokemon.")
    .addField("Bot is blacklisted?", "Don't worry, creating bots is easy. Join our official server to invite a new bot, and always get the latest announcements.")
    .addField("You're miles, or a moderator from Pokecord?", "Impressed with my bot? 100% accuracy. Come drop me a DM.")
    .addField("Want to help?", "I'm glad you would like to help! There are two ways you can do so.\nFirstly, share it. This is extremely important for the bot to grow.\nAnd secondly, support me financially. Look at your PayPal/bank balance/anything, do you have that $1 to spare for me? Yes, even $1 helps. And of course, the more, the better. If you're interested, please drop me a DM. \nHere are some perks you can get:\n- Private bot for your server\n- Premium on another bot\n- Priority for feature requests")
    .addField("Bot invite link", "https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8")
    .addField("Server invite link", "https://discord.gg/TYe3U4w");
  
  message.channel.send(embed);
};

exports.help = {
  name: "info",
  category: "General",
  description: "Get some information about me.",
  usage: "info"
};