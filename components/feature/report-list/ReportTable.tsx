import Button from '@/components/common/Button';
import useTable from '@/hook/useTable.hook';
import { ReportType } from '@/type/report.type';
import {
  isToday,
  showLocalDateFormatWeb,
  showLocalDateTimeFormatWeb,
} from '@/utilities/normal-fn';
import { ChangeEvent, Fragment } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoIosPrint } from 'react-icons/io';
import ArrowTableSort from '../pagination/ArrowTableSort';
import Pagination from '../pagination/Pagination';
import { MdDelete, MdDownload } from 'react-icons/md';

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
                <td>{showLocalDateTimeFormatWeb(row.createdAt)}</td>
                <td>
                  <div className="flex w-full justify-center">
                    <Button
                      id={'Print'}
                      onClick={() => {}}
                      type={'button'}
                      name={'Print'}
                      theme="light"
                      className="mr-2"
                    >
                      <MdDownload className="text-[20px]" />
                    </Button>
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
