import Button from '@/components/common/Button';
import { ReportType } from '@/type/report.type';
import {
  isToday,
  showLocalDateFormatWeb,
  showLocalDateTimeFormatWeb,
} from '@/utilities/normal-fn';
import { ChangeEvent, Fragment } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete, MdDownload, MdPrint } from 'react-icons/md';
import Pagination from '../pagination/Pagination';
import { TfiPrinter } from 'react-icons/tfi';

type TablePropsType = {
  reportList: ReportType[];
  routeEdit: (reportId: string) => void;
  totalData: number;
  fieldNameSort: Record<keyof ReportType, '' | 'ASC' | 'DESC'> | undefined;
  page: number;
  sizePage: number;
  handlePerPage: (event: ChangeEvent<HTMLSelectElement>) => void;
  handlePage: (count: number) => void;
  firstPage: () => void;
  finalPage: () => void;
  handleSorting: (fieldName: keyof ReportType) => void;
  removeCheck: (reportId: string) => void;
  onClickPrint: (report: ReportType) => void;
};
const ReportTable = ({
  reportList = [],
  routeEdit,
  totalData,
  fieldNameSort,
  handleSorting,
  page,
  sizePage,
  handlePerPage,
  handlePage,
  firstPage,
  finalPage,
  removeCheck,
  onClickPrint,
}: TablePropsType) => {
  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md">
        <table className="table-report">
          <thead>
            <tr className="border-none bg-[#dadadb] text-black">
              <th className="min-w-[80px]">Date</th>
              <th className="min-w-[80px]">Created Date</th>
              <th className="min-w-[80px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {reportList.map((row, index) => (
              <tr
                key={index}
                className={isToday(row.createdAt) ? 'bg-red-100' : 'bg-white'}
              >
                <td>{showLocalDateFormatWeb(row.dateReport)}</td>
                <td>
                  {showLocalDateTimeFormatWeb(row.createdAt)}
                  {Object.values(row?.lots || {}).length > 0 ? null : (
                    <span className="badge-extra">Not Ready</span>
                  )}
                </td>
                <td>
                  <div className="flex w-full justify-center">
                    {Object.values(row?.lots || {}).length > 0 ? (
                      <Button
                        id={'Print'}
                        onClick={() => onClickPrint(row)}
                        type={'button'}
                        name={'Print'}
                        theme="light"
                        className="mr-2"
                      >
                        <TfiPrinter className="text-[20px]" />
                      </Button>
                    ) : null}
                    <Button
                      id={'Edit'}
                      onClick={() => routeEdit(row.reportId)}
                      type={'button'}
                      name={'Edit'}
                      className="mr-2"
                    >
                      <CiEdit className="text-[20px]" />
                    </Button>
                    <Button
                      id={'removeCheck'}
                      onClick={() => removeCheck(row.reportId)}
                      type={'button'}
                      name={'removeCheck'}
                      theme="danger"
                    >
                      <MdDelete className="text-[16px]" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        sizePage={sizePage}
        page={page}
        handlePerPage={handlePerPage}
        firstPage={firstPage}
        handlePage={handlePage}
        finalPage={finalPage}
        totalData={totalData}
        setupPerPage={[5, 10]}
      />
    </Fragment>
  );
};

export default ReportTable;
