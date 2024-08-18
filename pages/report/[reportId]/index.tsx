import DailyReport from '@/components/feature/print-form/DailyReport';
import withSession from '@/hoc/withSession';

const Report = () => {
  const data = [
    {
      customer: 'UAI',
      start: '08:00',
      end: '10:13',
      number: '130955.523',
      temperature1: 490,
      temperature2: 490,
      temperature3: 500,
      temperature4: 430,
      component: '1b',
      other: '-',
    },
    {
      customer: 'JOB_B',
      start: '10:13',
      end: '10:21',
      number: '-',
      temperature1: 490,
      temperature2: 490,
      temperature3: 500,
      temperature4: 430,
      component: '-',
      other: '-',
    },
    {
      customer: 'JOB_C',
      start: '10:21',
      end: '10:45',
      number: '-',
      temperature1: 490,
      temperature2: 490,
      temperature3: 500,
      temperature4: 430,
      component: '-',
      other: '-',
    },
  ];
  return <DailyReport data={data} />;
};

export default withSession(Report, 'ListReport', 'Manual Daily Report');
