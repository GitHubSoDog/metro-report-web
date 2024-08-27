import ssrInstance from '@/configuration/service-side.http';
import { PaginationListType } from '@/type/list.type';
import { ReportType } from '@/type/report.type';
import axios, { CancelTokenSource } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTable from './useTable.hook';
import { genarateIdNormal } from '@/utilities/normal-fn';

const useReport = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [report, setReport] = useState<ReportType[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const source = axios.CancelToken.source();

    fetchReport(source);

    return () => {
      source.cancel('Operation canceled by the user.');
      setLoading(false);
      setTotal(0);
      setReport([]);
    };
  }, []);

  const fetchReport = async (source: CancelTokenSource) => {
    try {
      setLoading(true);
      const response = await ssrInstance.get<PaginationListType<ReportType>>(
        '/list-report?page=1&limit=5',
        {
          cancelToken: source.token,
        }
      );
      setTotal(response.data.totalRecords);
      setReport(response.data.data);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setReport([]);

        Swal.fire({
          title: 'เกิดข้อผิดพลาด',
          text: 'กรุณาติดต่อผู้พัฒนา',
          icon: 'warning',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async (page: number, sizePage: number) => {
    try {
      setLoading(true);
      const response = await ssrInstance.get<PaginationListType<ReportType>>(
        `/list-report?page=${page}&limit=${sizePage}`
      );
      setTotal(response.data.totalRecords);

      setReport(response.data.data);
    } catch (err) {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด',
        text: 'กรุณาติดต่อผู้พัฒนา',
        icon: 'warning',
      });
    } finally {
      setLoading(false);
    }
  };

  const routeEdit = (reportId: string) => {
    router.push(`/report/${reportId}`);
  };

  const routeNewReport = () => {
    const reportId = genarateIdNormal();
    router.push(`/report/${reportId}?status=new`);
  };

  const removeCheck = (reportId: string) => {
    Swal.fire({
      title: 'คุณต้องการจะลบใช่หรือไม่ ?',
      showCancelButton: true,
      confirmButtonText: 'ลบ',
      confirmButtonColor: 'red',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await removeReport(reportId);
      }
    });
  };

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
  } = useTable<ReportType>(report, 5, fetchNextPage);

  const removeReport = async (reportId: string) => {
    try {
      setLoading(true);
      await ssrInstance.delete<boolean>(`/daliy-report/${reportId}`);
      Swal.fire('Saved!', '', 'success').then(() => {
        firstPage();
      });
    } catch (err) {
      setLoading(false);

      Swal.fire({
        title: 'เกิดข้อผิดพลาด',
        text: 'กรุณาติดต่อผู้พัฒนา',
        icon: 'warning',
      });
    }
  };

  return {
    routeEdit,
    isLoading,
    report,
    fetchNextPage,
    total,
    fieldNameSort,
    handleSorting,
    page,
    sizePage,
    dataTableList: data,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
    routeNewReport,
    removeCheck,
  };
};

export default useReport;
