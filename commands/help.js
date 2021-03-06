const Discord = require('discord.js')
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"],});
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: {
        name: "help",
        description: "Help of commands"
    },
    async execute(interaction) {
        var user = interaction.user
        const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageButton()
					.setCustomId('howto')
					.setLabel('How to use')
					.setStyle('PRIMARY')
                    .setEmoji('926913611476119582'),
                new Discord.MessageButton()
					.setCustomId('commands')
					.setLabel('Commands')
					.setStyle('PRIMARY')
                    .setEmoji('926913673426001981'),
                new Discord.MessageButton()
					.setLabel('Website')
					.setStyle('LINK')
                    .setEmoji('926913736697077760')
                    .setURL("https://botground.ga/cypherer"),
			);
        const embedHelp = new Discord.MessageEmbed()
            .setAuthor({name: "Cypherer Help - Basic", iconURL: "https://iili.io/YMpe9f.md.png"})
            .setDescription("The default prefix is **/**. Using the buttons you can view the complete list of commands that the bot can execute. To get started we recommend that you visit the `How to use` section of the help.")
            .setFooter(`Requested by ${user.tag}`, user.displayAvatarURL())
            .setTimestamp()
            .setColor("#4F646F")
        interaction.reply({embeds: [embedHelp], components: [row]})

        const collector = interaction.channel.createMessageComponentCollector()
        collector.on('collect', async i => {
            if(i.customId === "commands"){
                const embedCommands = new Discord.MessageEmbed()
                    .setAuthor({name: "Cypherer Help - Commands", iconURL: "https://iili.io/YMpe9f.md.png"})
                    .setDescription("Here is how to use this bot. Type **/ **+*the cypher you want*, insert your text and it will be immediatly translated.\nThese are the cyphers that you can you:")
                    .addField("**Morse** - `/morse [text]`", "Morse is a communication code consisting of short and long signals, which are broadcasted with short intervals. More informations [here](https://botground.ga/cypherer/info/morse)", false)
                    .addField("**Atbash** - `/atbash [text]`", "The atbash cipher is a simple substitution cipher for the Hebrew alphabet. More informations [here](https://botground.ga/cypherer/info/atbash)", false)
                    .addField("**Kenny code** - `/kenny [text]`", "Encode your text in Kenny code from Southpark. More informations [here](https://botground.ga/cypherer/info/kenny)", false)
                    .addField("**ROT 13** - `/rot [text]`", "The Caesar cipher or shift cipher method uses a simple substitution encryption. This means that every character is substituted by another character according to a specific system. More informations [here](https://botground.ga/cypherer/info/rot)", false)
                    .setFooter(`Requested by ${user.tag}`, user.displayAvatarURL())
                    .setTimestamp()
                    .setColor("#4F646F")
                await i.update({embeds: [embedCommands], components: [row]})
            }
        })

        collector.on('collect', async i => {
            if(i.customId === "howto"){
                const embedHowTo = new Discord.MessageEmbed()
                    .setAuthor({name: "Cypherer Help - How to use", iconURL: "https://iili.io/YMpe9f.md.png"})
                    .setDescription("This bot is really easy to use! Type **/ **+*the cypher you want*, insert your text and it will be immediatly translated.\n\nYou can find in the section 'Commands' all the cypher that you can use.\n<:emoji:926926598245081169> __Important:__ for a better experience, allow to the bot to **use external emojis <:emoji:926926598245081169>**\n\nFor more informations, visit our official website by clicking [here](https://botground.ga/cypherer) and join our [support server](https://discord.gg/gshJMkvRFZ)\n\nIf you want to **invite me** in your server, click [here](https://discord.com/oauth2/authorize?client_id=925762773332418560&scope=bot+applications.commands&permissions=274878221376) and select the server")
                    .setFooter(`Requested by ${user.tag}`, user.displayAvatarURL())
                    .setTimestamp()
                    .setColor("#4F646F")
                    .setImage("https://i.postimg.cc/ZRSTNSX2/how-to-use.gif")
                await i.update({embeds: [embedHowTo], components: [row]})
            }
        })
    }
}