import { Telegraf, Context } from 'telegraf'
import { responseChat } from '../helpers/responseChat'

const msg = responseChat.startChat

/**
 * Handle `back` action (belum menemukan best practice)
 * @param bot 
 */
export function setupBack(bot: Telegraf<Context>) {
    bot.action('go_home', (context) => {
        context.deleteMessage(context.message?.message_id)
        context.replyWithHTML(msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Daftar Perintah', callback_data: 'list_command' }]
                ]
            }
        })
    })
}