const Discord = require('discord.js');
const client = new Discord.Client();

client.login(`  token   `);

var prefix = ("vb!");

client.on("message", (message) => {

    if(message.content === "bonjour") {
        message.channel.send("Salutations!")
    }

    if (message.content === prefix + "help"){
        message.channel.send("Veux-tu de l'aide ?")
    }

});
