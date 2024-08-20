import Button from '@/components/common/Button';
import ReportTable from '@/components/feature/report-list/ReportTable';
import withSession from '@/hoc/withSession';
import useReport from '@/hook/useReport.hook';
import { ListReportType } from '@/type/list.type';
import { MouseEvent } from 'react';

const List = () => {
  const { routeEdit } = useReport();
  const handleSubmit = async () => {
    const response = await fetch('/api/daliy-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: { id: 'test' } }),
    });
    const result = await response.json();
  };
  const reportList: ListReportType[] = [
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
    {
      reportId: '1',
      date: '2024-08-12',
      createDate: '2024-08-12 00:00:12',
    },
  ];

  return (
    <div className="shadow-panel">
      <div className="flex justify-between items-baseline pb-2">
        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl">
          Daily{' '}
          <span className="underline underline-offset-3 decoration-2 decoration-primary">
            Report
          </span>
        </h1>
        <Button
          id={'Add Report'}
          onClick={handleSubmit}
          type={'button'}
          name={'Add Report'}
          theme="success"
        >
          Add Report
        </Button>
      </div>

      <ReportTable reportList={reportList} routeEdit={routeEdit} />
    </div>
  );
};

export default withSession(List, 'List Daily Report', 'List Daily Report');
