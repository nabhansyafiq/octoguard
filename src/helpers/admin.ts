import { Context } from 'telegraf'

/**
 * Check member status is creator or administrator
 * @param context 
 */
export async function checkAdmin(context: Context) {
    const getAdmins = await context.getChatAdministrators()
    const admin = getAdmins.find((val) => val.user.id === context.from?.id)

    return ['creator', 'administrator'].includes(admin?.status!) || admin?.can_restrict_members
}

/**
 * Check bot status is administrator
 * @param context 
 */
export async function checkAdminBot(context: Context) {
    const adminBot = await context.getChatMember(context.botInfo?.id!)

    return adminBot.status === 'administrator' || adminBot.can_restrict_members
}