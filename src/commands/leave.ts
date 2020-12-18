import { Telegraf, Context } from 'telegraf'
import { checkAdmin } from '../helpers/admin'
import { checkGroup } from '../helpers/group'
import { responseChat } from '../helpers/responseChat'

/**
 * Leave a group or supergroup
 * @param bot 
 */
export function setupLeave(bot: Telegraf<Context>) {
    bot.command('leave', async (context) => {
        if (await checkAdmin(context, 'user'))
            return context.leaveChat()
        else if (!checkGroup(context))
            return context.reply(responseChat.leaveChat.onlyInGroup, { parse_mode: 'MarkdownV2' })

        // Jika bukan creator/administrator, hapus pesan perintah
        return context.deleteMessage(context.message?.message_id)
    })
}