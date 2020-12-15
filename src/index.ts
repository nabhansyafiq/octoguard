import * as dotenv from 'dotenv'
dotenv.config()
import { bot } from './bot'
import { reportErr } from './helpers/error'
import { setupBot } from './commands/start'
import { setupBack } from './commands/back'

// Setup commands
setupBot(bot)
setupBack(bot)

bot.catch(reportErr)
bot.launch().then(() => console.info('Bot is running...')).catch(reportErr)