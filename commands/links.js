const Discord = require('discord.js')
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"],});
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: {
        name: "links",
        description: "Links of Cypherer"
    },
    async execute(interaction) {
        var user = interaction.user
        const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageButton()
					.setLabel('Invite')
					.setStyle('LINK')
                    .setEmoji('928710223701631046')
                    .setURL("https://discord.com/oauth2/authorize?client_id=925762773332418560&scope=bot+applications.commands&permissions=274878221376"),
                new Discord.MessageButton()
					.setLabel('Support')
					.setStyle('LINK')
                    .setEmoji('928708289578037298')
                    .setURL("https://discord.gg/gshJMkvRFZ"),
                new Discord.MessageButton()
					.setLabel('GitHub')
					.setStyle('LINK')
                    .setEmoji('928711386501103687')
                    .setURL("https://github.com/BotGround"),
			);
        const embed = new Discord.MessageEmbed()
            .setAuthor({name: "Cypherer Help - All Links", iconURL: "https://iili.io/YMpe9f.md.png"})
            .setDescription("These are the most important and useful links of the bot:\n**INVITE** ➜ [here](https://discord.com/oauth2/authorize?client_id=925762773332418560&scope=bot+applications.commands&permissions=274878221376)\n**SUPPORT SERVER** ➜ [join](https://discord.gg/gshJMkvRFZ)\n**WEBSITE** ➜ [here](https://botground.ga/cypherer)\n**GITHUB** ➜ [organization](https://github.com/BotGround)")
            .setFooter(`Requested by ${user.tag}`, user.displayAvatarURL())
            .setTimestamp()
            .setColor("#4F646F")
        interaction.reply({embeds: [embed], components: [row], ephemeral: true})
    }
}