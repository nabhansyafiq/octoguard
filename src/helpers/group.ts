import { Context } from 'telegraf'

export function checkGroup(context: Context) {
    return ['group', 'supergroup'].includes(context.chat?.type!)
}