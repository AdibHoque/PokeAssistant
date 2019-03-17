const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setColor(0xFF4500);
  
  let owners = process.env.OWNER.split(',');
  
  if (!owners.includes(message.author.id))  {
    embed
      .setTitle("Permission Denied")
      .setDescription("You do not have permission to use this command. It is meant for other users.");
    
    return message.channel.send(embed);
  }
  
  let code = args.join(" ");
      
  async function evaluate(code) {
  	try {
 		  const evaled = eval(code);
    	const clean = await client.clean(evaled);

    	embed
        .setTitle("Output")
  		  .setDescription("```js\n" + clean.substr(0, 2000) + "```")
      	.addField("Code", "```js\n" + code.substr(0, 1000) + "```");
    	message.channel.send(embed);
  	} catch (err) {
      embed
        .setTitle("Error")
      	.setDescription("```xl\n" + (await client.clean(err)).substr(0, 2000) + "```")
      message.channel.send(embed);
  	}
  }
      
  evaluate(code);
};

exports.help = {
  name: "eval",
  category: "Debug",
  description: "Evaluate code.",
  usage: "eval <code>"
};