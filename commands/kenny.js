const kenny = require("../config/kenny.json")
const { letterTrans } = require(`custom-translate`)
const Discord = require("discord.js")
module.exports = {
    data: {
        name: "kenny",
        description: "Kenny code encripting"
    },
    async execute(interaction) {
        let text = interaction.options.getString('text').toLowerCase();
        interaction.reply({ content: `${letterTrans(text, kenny)}` })
    }
}