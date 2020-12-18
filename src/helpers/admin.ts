import { Context } from 'telegraf'

/**
 * Check user or bot roles
 * @param context 
 * @param type `bot` | `user`
 */
export async function checkAdmin(context: Context, type: 'bot' | 'user'): Promise<boolean | undefined> {
    const roles = ['creator', 'administrator']
    const bot = await context.getChatMember(context.botInfo?.id!)
    const admin = await context.getChatMember(context.from?.id!)

    if (type === 'bot')
        return roles.includes(bot.status) || bot.can_restrict_members

    return roles.includes(admin.status) || admin.can_restrict_members
}