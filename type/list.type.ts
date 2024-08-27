export type ListReportType = {
  reportId: string;
  date: string;
  createDate: string;
};

export type PaginationListType<T> = {
  page: number;
  limit: number;
  totalRecords: number;
  totalPages: number;
  data: T[];
};
