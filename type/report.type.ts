import { LotType } from './lots.type';

export type ReportType = {
  id: string;
  lots: Record<string, LotType>;
  employeeIroning: ApproveReportType;
  varify: ApproveReportType;
  employeeStretch: ApproveReportType;
  approve: ApproveReportType;
  createBy: string;
  updateBy: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ApproveReportType = {
  employeeName: string;
  approveDate: Date;
};
