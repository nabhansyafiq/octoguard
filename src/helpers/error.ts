let errorReports = []

/**
 * Get errors report
 * @param error 
 * @param reason 
 */
export function reportErr(error: Error, reason?: string) {
    console.error(error, reason)
    errorReports.push(`Error: ${error.message}\n Reason: ${reason}`)
}