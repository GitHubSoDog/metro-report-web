import { ReportType } from '@/type/report.type';

const isIsoDateString = (value: any): boolean => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  return typeof value === 'string' && isoDateRegex.test(value);
};

export const reportApiDataTransformToReport = (obj: any): ReportType => {
  if (typeof obj !== 'object' || obj === null) return obj;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (isIsoDateString(value)) {
        obj[key] = new Date(value);
      } else if (typeof value === 'object' && value !== null) {
        reportApiDataTransformToReport(value); // Recursively apply to nested objects
      }
    }
  }

  return obj;
};

export const transformDatesToString = <T>(obj: any): T => {
  if (typeof obj !== 'object' || obj === null) return obj;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key as keyof T];

      if (value instanceof Date) {
        (obj as any)[key] = value.toISOString();
      } else if (typeof value === 'object' && value !== null) {
        transformDatesToString(value); // Recursively apply to nested objects
      } else if (typeof value === 'string' && value !== null) {
        (obj as any)[key] = value.trim();
      }
    }
  }

  return obj;
};
