import { format, parseISO } from "date-fns"

export const convertDatabaseTimeToDateFormat = (org?: string) => {
  if (org === undefined) {
    return ""
  } else {
    return format(parseISO(org), 'M/d/yy')
  }
}

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds) % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
