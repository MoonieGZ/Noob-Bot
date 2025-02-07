import dotenv from 'dotenv'

dotenv.config()

const {DISCORD_TOKEN} = process.env
const TIMEOUT_MINUTES = 1
const TIMEOUT_DURATION = TIMEOUT_MINUTES * 60 * 1000
const NOOB_CHANNEL = '1337531088859303936'

if (!DISCORD_TOKEN) {
    throw new Error('Missing environment variables')
}

export const config = {
    DISCORD_TOKEN,
    TIMEOUT_DURATION,
    TIMEOUT_MINUTES,
    NOOB_CHANNEL
}