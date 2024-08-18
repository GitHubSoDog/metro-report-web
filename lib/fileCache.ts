import fs from 'fs';
import path from 'path';

const CACHE_FILE_PATH = path.join(process.cwd(), 'data', 'cache.json');

export const readCache = (): any => {
  if (!fs.existsSync(CACHE_FILE_PATH)) {
    return null;
  }
  const data = fs.readFileSync(CACHE_FILE_PATH, 'utf-8');
  return JSON.parse(data);
};

export const writeCache = (data: any): void => {
  fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
};
