import { ReportType } from '@/type/report.type';
import { ReportRepository } from './repository';

export class ReportService {
  private reportRepository: ReportRepository;

  constructor() {
    this.reportRepository = new ReportRepository(); // Create an instance of ClassB
  }

  getListReport(page: string = '1', limit: string = '10') {
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
    return this.reportRepository.getList(pageNumber, limitNumber);
  }

  getReport(reportId: string): Partial<ReportType | null> {
    return this.reportRepository.get(reportId);
  }

  createReport(
    reportId: string,
    report: ReportType
  ): Partial<ReportType> | null {
    return this.reportRepository.set(reportId, {
      ...report,
      reportId: reportId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  updateReport(
    reportId: string,
    report: ReportType
  ): Partial<ReportType> | null {
    const data = this.reportRepository.get(reportId);
    if (!data) {
      return null;
    }
    return this.reportRepository.set(reportId, {
      ...report,
      reportId: reportId,
      updatedAt: new Date(),
    });
  }

  deleteReport(reportId: string): true | null {
    const data = this.reportRepository.get(reportId);
    if (!data) {
      return null;
    }
    return this.reportRepository.remove(reportId);
  }

  deleteLotReport(reportId: string, lotId: string): true | null {
    const data = this.reportRepository.get(reportId);
    if (!data) {
      return null;
    }
    return this.reportRepository.removeLot(reportId, lotId);
  }
}
