const morse = require("../config/morse.json")

module.exports = {
    data: {
        name: "morse",
        description: "Morse encripting"
    },
    async execute(interaction) {
        const text = interaction.options.getString('text').toLowerCase();
        if(text.includes("a")) {
            text = text.replace(eval(`/${a}/g`), morse.a);
        }
        interaction.reply(text)
    }
}