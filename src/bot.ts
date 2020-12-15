import { Context, Telegraf } from 'telegraf'

const { BOT_TOKEN, BOT_USERNAME } = process.env

export const bot = new Telegraf<Context>(BOT_TOKEN!, { username: BOT_USERNAME })