import useTable from '@/hook/useTable.hook';
import { ListReportType } from '@/type/list.type';
import { Fragment, MouseEvent } from 'react';
import Pagination from '../pagination/Pagination';
import ArrowTableSort from '../pagination/ArrowTableSort';
import Button from '@/components/common/Button';
import { IoIosPrint } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';

type TablePropsType = {
  reportList: ListReportType[];
  routeEdit: (reportId: string) => void;
};
const ReportTable = ({ reportList = [], routeEdit }: TablePropsType) => {
  const {
    fieldNameSort,
    handleSorting,
    page,
    sizePage,
    dataTableList: data,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
  } = useTable<ListReportType>(reportList, 10);

  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md">
        <table className="table-custom">
          <thead>
            <tr className="border-none">
              <th
                className="min-w-[80px]"
                onClick={() => handleSorting('date')}
              >
                Date
                <ArrowTableSort typeSort={fieldNameSort?.date} />
              </th>
              <th
                className="min-w-[80px]"
                onClick={() => handleSorting('createDate')}
              >
                Created Date
                <ArrowTableSort typeSort={fieldNameSort?.createDate} />
              </th>
              <th className="min-w-[80px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.createDate}</td>
                <td>
                  <div className="flex w-full justify-center">
                    <Button
                      id={'Print'}
                      onClick={() => {}}
                      type={'button'}
                      name={'Print'}
                      className="mr-2"
                    >
                      <IoIosPrint />
                    </Button>
                    <Button
                      id={'Edit'}
                      onClick={() => routeEdit(row.reportId)}
                      type={'button'}
                      name={'Edit'}
                      theme="danger"
                    >
                      <CiEdit className="text-[20px]" />
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
        totalData={reportList.length}
      />
    </Fragment>
  );
};

export default ReportTable;
