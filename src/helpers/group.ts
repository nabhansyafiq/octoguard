import { Context } from 'telegraf'

/**
 * Checking group or supergroup
 * @param context 
 */
export function checkGroup(context: Context) {
    return ['group', 'supergroup'].includes(context.chat?.type!)
}