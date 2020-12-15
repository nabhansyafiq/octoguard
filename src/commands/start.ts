import { Telegraf, Context } from 'telegraf'
import { responseChat } from '../helpers/responseChat'

const msg = responseChat.startChat
const listCommand = responseChat.listCommand

/**
 * Setup bot when use command `/start`
 * @param bot 
 */
export function setupBot(bot: Telegraf<Context>) {
    bot.command('start', (context) => {
        context.replyWithHTML(msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Daftar Perintah', callback_data: 'list_command' }]
                ],
            }
        })
    })

    // Callback for `list_command`
    bot.action('list_command', (context) => {
        context.deleteMessage(context.message?.message_id)
        context.replyWithHTML(listCommand, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Kembali', callback_data: 'go_home' }]
                ]
            }
        })
    })
}