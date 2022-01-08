const { error } = require('console');
const { Client, Collection, Intents, DiscordAPIError} = require('discord.js')
const Discord = require('discord.js');
const client =  new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
const fs = require('fs')
const wait = require('util').promisify(setTimeout);
client.commands = new Collection();

client.login("OTI1NzYyNzczMzMyNDE4NTYw.Ycx1xQ.ARanV2h1er40oWrbuAW60sdKN4w");

const fileComandi = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of fileComandi) {
    const comando = require(`./commands/${file}`);
    client.commands.set(comando.data.name, comando);
} 

client.once('ready', () => {
    console.log("----Cypherer Online----")
    client.user.setActivity('/ for help', { type: 'LISTENING' });
});

client.on('messageCreate', async (message) =>{
    if(message.content == "c!registra"){
        const data = {
            name: 'rot',
            description: 'ROT13 encrypting',
            options: [
                {
                    name: 'text',
                    description: 'Insert a text',
                    type: 'STRING',
                    required: true,
                }
            ]
        };
        const comando = await client.application?.commands.create(data);
        console.log(comando)
    }
})

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()) return;

    const nomeComando = interaction.commandName;
    if (!client.commands.has(nomeComando)) return;
    try {
        await client.commands.get(nomeComando).execute(interaction)
    } catch (error) {
        console.error(error);
        await interaction.reply({content: ":x: Sorry, something went **wrong** :x:", ephemeral: true })
    }
})