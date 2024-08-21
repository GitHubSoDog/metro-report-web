import { LotType } from './lots.type';

export type ReportType = {
  id: string;
  su: string;
  dateReport: Date;
  machine: string;
  duty: string;
  lineLeader: string;
  start: Date;
  end: Date;
  department: DEPARTMENT_ENUM;
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

export enum DEPARTMENT_ENUM {
  PRODUCTION = 'ฝ่ายผลิตโรงรีด',
}
