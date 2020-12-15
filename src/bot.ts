import { Context, Telegraf } from 'telegraf'

const TelegrafBot = require('telegraf')
const { BOT_TOKEN, BOT_USERNAME } = process.env

export const bot = new TelegrafBot(BOT_TOKEN, { username: BOT_USERNAME }) as Telegraf<Context>