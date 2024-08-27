export type IotServiceType = {
  jobname: string;
  start_time: string;
  end_time: string;
  temperature_dyne: string;
  temperature_billet: string;
  container: string;
  lengths: string;
  speed: string;
};

export type GetReportApiType = {
  reportId: string;
  su: string;
  dateReport: string;
  machine: string;
  duty: string;
  lineLeader: string;
  start: string;
  end: string;
  lots: Record<string, LotDataApiType>;
  department: string;
  employeeIroning: EmployeeIroning;
  varify: Varify;
  employeeStretch: EmployeeStretch;
  approve: Approve;
  createBy: string;
  updateBy: string;
  createdAt: string;
  updatedAt: string;
};

export interface LotDataApiType {
  lotId: string;
  lotName: string;
  skinType: string;
  billetType: string;
  customerName: string;
  start: string;
  end: string;
  dyNumber: string;
  dyScreen: string;
  dySkin: string;
  billetScreen: string;
  billetMiddle: string;
  container: string;
  boNo: string;
  insNo: string;
  holeCount: string;
  averageWeight: string;
  billetWeight: string;
  factoryDate: string;
  billetNumber: string;
  ironingSize: string;
  tendon: string;
  billetCount: string;
  times: string;
  longShop: string;
  longExpect: string;
  good: string;
  waste: string;
  wastePercent: string;
  speedPull: string;
  desc: string;
}

export interface EmployeeIroning {
  employeeName: string;
  approveDate: string;
}

export interface Varify {
  employeeName: string;
  approveDate: string;
}

export interface EmployeeStretch {
  employeeName: string;
  approveDate: string;
}

export interface Approve {
  employeeName: string;
  approveDate: string;
}

export type PostIotRequestType = {
  date: string;
  machinename: string;
  starttime: string;
  endtime: string;
};
