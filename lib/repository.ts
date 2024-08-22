import { ReportType } from '@/type/report.type';
import fs from 'fs';
import path from 'path';

const CACHE_FILE_PATH = path.join(process.cwd(), 'data', 'cache.json');

export class ReportRepository {
  getList(pageNumber: number, limitNumber: number) {
    const report = this.readCache();
    if (!report) {
      return null;
    }
    const keys = Object.keys(report);
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = startIndex + limitNumber;
    const paginatedKeys = keys.slice(startIndex, endIndex);
    const paginatedData: ReportType[] = paginatedKeys.map((key) => report[key]);
    return {
      page: pageNumber,
      limit: limitNumber,
      totalRecords: keys.length,
      totalPages: Math.ceil(keys.length / limitNumber),
      data: paginatedData,
    };
  }

  get(reportId: string) {
    const report = this.readCache();
    if (!report) {
      return null;
    }
    return report?.[reportId] || null;
  }

  set(reportId: string, data: ReportType) {
    const report = this.readCache();
    if (!report) {
      return null;
    }
    const updated = { ...report, [reportId]: data };
    this.writeCache(updated);
    return updated[reportId];
  }

  remove(reportId: string) {
    const report = this.readCache();
    if (!report) {
      return null;
    }
    let updated = { ...report };
    delete updated?.[reportId];
    this.writeCache(updated);
    return true;
  }

  writeCache = (data: Record<string, ReportType>): void => {
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  };

  readCache(): Record<string, ReportType> | null {
    if (!fs.existsSync(CACHE_FILE_PATH)) {
      return null;
    }
    return JSON.parse(fs.readFileSync(CACHE_FILE_PATH, 'utf-8'));
  }
}
