export const parseDate = (date?: string): Date | null => {
  return date !== undefined ? new Date(date) : null
}
