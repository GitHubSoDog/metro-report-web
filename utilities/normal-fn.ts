import { customAlphabet } from 'nanoid';

export const genarateIdNormal = (): string => {
  const nanoid = customAlphabet('1234567890abcdef', 10);
  return nanoid(10);
};
