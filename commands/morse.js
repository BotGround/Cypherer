const morse = require("../config/morse.json")
const { letterTrans } = require(`custom-translate`)
const Discord = require("discord.js")
module.exports = {
    data: {
        name: "morse",
        description: "Morse encripting"
    },
    async execute(interaction) {
        let text = interaction.options.getString('text').toLowerCase();
        interaction.reply({ content: `${letterTrans(text, morse)}` })
}
}