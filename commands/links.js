const Discord = require('discord.js')
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"],});

module.exports = {
    data: {
        name: "links",
        description: "Atbash encripting"
    },
    async execute(interaction) {
        let text = interaction.options.getString('text').toLowerCase();
        interaction.reply({ content: `${letterTrans(text, atbash)}` })
    }
}