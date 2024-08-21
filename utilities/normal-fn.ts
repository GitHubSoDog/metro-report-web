import { format } from 'date-fns';
import { customAlphabet } from 'nanoid';

export const genarateIdNormal = (): string => {
  const nanoid = customAlphabet('1234567890abcdef', 10);
  return nanoid(10);
};

export const showLocalTime = (date: Date): string => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const showLocalDate = (date: Date): string => {
  return format(date, 'dd/MM/yyyy');
};
