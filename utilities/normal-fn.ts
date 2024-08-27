import { format } from 'date-fns';
import { toZonedTime, format as formatTz } from 'date-fns-tz';
import { customAlphabet } from 'nanoid';

const timeZone = 'Asia/Bangkok';

export const genarateIdNormal = (): string => {
  const nanoid = customAlphabet('1234567890abcdef', 10);
  return nanoid(10);
};

export const showLocalTime = (date: Date): string => {
  // Convert the date to the specified timezone
  const zonedDate = toZonedTime(date, timeZone);

  // Format the date to 'HH:mm' in the specified timezone
  return formatTz(zonedDate, 'HH:mm', { timeZone });
};

export const showLocalDate = (date: Date): string => {
  return format(date, 'dd/MM/yyyy');
};

export const showLocalDateFormatWeb = (date: Date): string => {
  return format(date, 'dd-MM-yyyy');
};

export const showLocalDateTimeFormatWeb = (date: Date): string => {
  return format(date, 'dd-MM-yyyy HH:mm:ss');
};

export const showLocalDateTime = (date: Date): string => {
  return format(date, 'HH:mm:00');
};

export const showYmdDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  const reportDate = new Date(date);
  return (
    reportDate.getDate() === today.getDate() &&
    reportDate.getMonth() === today.getMonth() &&
    reportDate.getFullYear() === today.getFullYear()
  );
};

export const formatNumber = (text: string): string => {
  if (text) {
    return new Intl.NumberFormat('en-US').format(parseFloat(text));
  }
  return '';
};
