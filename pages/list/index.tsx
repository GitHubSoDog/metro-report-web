import Button from '@/components/common/Button';
import ReportTable from '@/components/feature/report-list/ReportTable';
import withSession from '@/hoc/withSession';
import useReport from '@/hook/useReport.hook';
import { MdAdd, MdReportGmailerrorred } from 'react-icons/md';

const List = () => {
  const {
    routeEdit,
    isLoading,
    report,
    total,
    fieldNameSort,
    handleSorting,
    page,
    sizePage,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
    routeNewReport,
    removeCheck,
    dataTableList,
  } = useReport();

  if (isLoading) return <>Loading...</>;

  return (
    <div className="shadow-panel">
      <div className="flex justify-between items-baseline pb-2">
        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl">
          Daily Report
        </h1>
        {total === 0 ? null : (
          <Button
            id={'Add Report'}
            onClick={routeNewReport}
            type={'button'}
            name={'Add Report'}
            className="mb-4"
            theme="success"
          >
            <div className="flex justify-center items-center">
              <MdAdd className="text-[20px] mr-2" />
              Add Report
            </div>
          </Button>
        )}
      </div>
      {total === 0 ? (
        <div className="flex flex-col justify-center items-center mb-4 border border-red-600 pt-4">
          <div>
            <MdReportGmailerrorred className="text-red-500 text-5xl mb-4" />
          </div>
          <div className="text-red-500 font-extrabold mb-4">
            - ยังไม่มี Report ในระบบ กรุณากด Add Report-
          </div>
          <Button
            id={'Add Report'}
            onClick={routeNewReport}
            type={'button'}
            name={'Add Report'}
            className="mb-4"
            theme="success"
          >
            <div className="flex justify-center items-center">
              <MdAdd className="text-[20px] mr-2" />
              Add Report
            </div>
          </Button>
        </div>
      ) : (
        <ReportTable
          totalData={total}
          reportList={dataTableList}
          routeEdit={routeEdit}
          fieldNameSort={fieldNameSort}
          handleSorting={handleSorting}
          page={page}
          sizePage={sizePage}
          handlePerPage={handlePerPage}
          handlePage={handlePage}
          firstPage={firstPage}
          finalPage={finalPage}
          removeCheck={removeCheck}
        />
      )}
    </div>
  );
};

export default withSession(List, 'List Daily Report', 'List Daily Report');
