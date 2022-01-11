const kenny = require("../config/kenny.json")
const { letterTrans } = require(`custom-translate`)

module.exports = {
    data: {
        name: "kenny",
        description: "Kenny code encripting"
    },
    async execute(interaction) {
        var user = interaction.user
        if(user.id == "821044835862839330") {
        let text = interaction.options.getString('text').toLowerCase();
        interaction.reply({ content: `${letterTrans(text, kenny)}` })
        }else{

        const embedEvent = new Discord.MessageEmbed()
        .setAuthor({ name: 'Cypherer - Coming soon...', iconURL: 'https://iili.io/YMpe9f.md.png' })
        .setDescription('<:Stage:929440782023266364> The bot will be available again after the [BotGround Public Launch](https://discord.gg/3BTc3Ezz?event=929437079295909929). Stay up to date and run to follow the event! Join the [community](https://discord.com/invite/cYySBAeJYb) to find out more.')


    interaction.reply({content: 'https://discord.gg/PXnj3ceCBM?event=929437079295909929', embeds: [embedEvent]})
        }
    }
}