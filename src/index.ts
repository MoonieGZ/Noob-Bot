import {Client, Events} from 'discord.js'
import {config} from './config'

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
})

client.once('ready', () => {
    console.log('Bot est prêt!')
})

client.login(config.DISCORD_TOKEN)
    .then(() => {
        console.log('Connecté avec succès!')
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion:', error)
    })

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    if (message.channelId === config.NOOB_CHANNEL) {
        if (!message.content.toLowerCase().includes('noob')) {
            if (message.member) {
                try {
                    await message.reply(`Tu n'a pas dit "noob", tu as été timeout pour ${config.TIMEOUT_MINUTES} mins.`);
                    await message.member.timeout(config.TIMEOUT_DURATION, "N'a pas dit `noob`.");
                } catch (error) {
                    console.error("Erreur lors du timeout:", error);
                }
            }
        }
    }
})