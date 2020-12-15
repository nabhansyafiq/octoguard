import { Telegraf, Context } from 'telegraf'
import { checkGroup } from '../helpers/group'
import { responseChat } from '../helpers/responseChat'

/**
 * Pin and unpin action
 * @param bot 
 */
export function setupPin(bot: Telegraf<Context>) {
    bot.command('pin', (context) => {
        // Check reply message
        const incorrectCmd = responseChat.pinChat.incorrectCmd
        const msg = context.message
        if (!msg || !msg?.reply_to_message?.message_id)
            return context.reply(incorrectCmd, { parse_mode: 'MarkdownV2' })

        // Check is not group
        const inGroup = responseChat.pinChat.onlyInGroup
        if (!checkGroup(context))
            return context.reply(inGroup, { parse_mode: 'MarkdownV2' })

        return context.pinChatMessage(msg.reply_to_message.message_id, { disable_notification: false })
    })

    bot.command('unpin', (context) => {
        // Check reply chat
        const incorrectCmd = responseChat.unpinChat.incorrectCmd
        if (!context.message?.reply_to_message)
            return context.reply(incorrectCmd, { parse_mode: 'MarkdownV2' })

        // Check is not group
        const inGroup = responseChat.unpinChat.onlyInGroup
        if (!checkGroup(context))
            return context.reply(inGroup, { parse_mode: 'MarkdownV2' })

        return context.unpinChatMessage()
    })
}