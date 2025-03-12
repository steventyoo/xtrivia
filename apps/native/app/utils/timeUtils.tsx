import { format, parseISO } from "date-fns"

export const convertDatabaseTimeToDateFormat = (org?: string) => {
  if (org === undefined) {
    return ""
  } else {
    return format(parseISO(org), 'M/d/yy')
  }  
}