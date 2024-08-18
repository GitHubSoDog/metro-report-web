import { useRouter } from 'next/router';

const useReport = () => {
  const router = useRouter();

  const routeEdit = (reportId: string) => {
    router.push(`/report/${reportId}`);
  };
  return {
    routeEdit,
  };
};

export default useReport;
