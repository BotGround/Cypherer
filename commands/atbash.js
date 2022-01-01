const atbash = require("../config/atbash.json")
const { letterTrans } = require(`custom-translate`)

module.exports = {
    data: {
        name: "atbash",
        description: "Atbash encripting"
    },
    async execute(interaction) {
        let text = interaction.options.getString('text').toLowerCase();
        interaction.reply({ content: `${letterTrans(text, atbash)}` })
    }
}