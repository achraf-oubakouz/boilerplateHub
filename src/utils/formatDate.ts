/**
 * Formats a date string or Date object to a human-readable format
 */
export function formatDate(
  date: string | Date, 
  options: Intl.DateTimeFormatOptions = {}
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  if (isNaN(dateObj.getTime())) {
    return 'Invalid date'
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  }

  return dateObj.toLocaleDateString('en-US', defaultOptions)
}

/**
 * Formats a date to show relative time (e.g., "2 days ago", "1 month ago")
 */
export function formatRelativeDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid date'
  }

  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  // Less than a minute
  if (diffInSeconds < 60) {
    return 'just now'
  }

  // Less than an hour
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`
  }

  // Less than a day
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`
  }

  // Less than a month
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`
  }

  // Less than a year
  const diffInMonths = Math.floor(diffInDays / 30)
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`
  }

  // More than a year
  const diffInYears = Math.floor(diffInMonths / 12)
  return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`
}

/**
 * Formats a date to ISO string format for API requests
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString()
}

/**
 * Parses different date string formats and returns a Date object
 */
export function parseDate(dateString: string): Date {
  // Try to parse ISO format first
  let date = new Date(dateString)
  
  if (!isNaN(date.getTime())) {
    return date
  }

  // Try common formats
  const formats = [
    // MM/DD/YYYY
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
    // DD/MM/YYYY
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
    // YYYY-MM-DD
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
  ]

  for (const format of formats) {
    const match = dateString.match(format)
    if (match) {
      const [, part1, part2, part3] = match
      
      // Try MM/DD/YYYY format
      date = new Date(`${part1}/${part2}/${part3}`)
      if (!isNaN(date.getTime())) {
        return date
      }

      // Try DD/MM/YYYY format
      date = new Date(`${part2}/${part1}/${part3}`)
      if (!isNaN(date.getTime())) {
        return date
      }

      // Try YYYY-MM-DD format
      date = new Date(`${part3}-${part1}-${part2}`)
      if (!isNaN(date.getTime())) {
        return date
      }
    }
  }

  // If all else fails, return invalid date
  return new Date('Invalid Date')
}

/**
 * Checks if a date is within a specific range
 */
export function isDateInRange(
  date: Date, 
  startDate: Date, 
  endDate: Date
): boolean {
  return date >= startDate && date <= endDate
}

/**
 * Gets the start and end of a day for a given date
 */
export function getDayBounds(date: Date): { start: Date; end: Date } {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)

  const end = new Date(date)
  end.setHours(23, 59, 59, 999)

  return { start, end }
}
