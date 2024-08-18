// pages/api/cache.ts

import { readCache, writeCache } from '@/lib/fileCache';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const data = readCache();
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(404).json({ success: false, message: 'No data found' });
      }
      break;
    case 'POST':
      const newData = req.body;
      writeCache(newData);
      res.status(201).json({ success: true, data: newData });
      break;
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
