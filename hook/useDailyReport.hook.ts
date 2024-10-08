import ssrInstance from '@/configuration/service-side.http';
import { LOT_DEFAULT } from '@/constants/lot';
import { transformApiToLotsReport, transformToIotApi } from '@/dto/iot.dto';
import {
  reportApiDataTransformToReport,
  transformDatesToString,
} from '@/dto/report.dto';
import { ChangeEventBaseType } from '@/type/event';
import { IotServiceType } from '@/type/iot-api';
import { LotType } from '@/type/lots.type';
import {
  ApproveReportType,
  DEPARTMENT_ENUM,
  ReportType,
} from '@/type/report.type';
import { genarateIdNormal } from '@/utilities/normal-fn';
import axios, { CancelTokenSource } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import useTable from './useTable.hook';
import useScrollbar from './useScrollbar.hook';

const useDailyReport = () => {
  const router = useRouter();
  const { status, reportId } = router.query;
  const [report, setReport] = useState<ReportType>({
    reportId: reportId as string,
    su: 'SU',
    dateReport: new Date(),
    machine: 'metroiot02',
    duty: '',
    lineLeader: '',
    start: new Date(),
    end: new Date(),
    lots: {},
    department: DEPARTMENT_ENUM.PRODUCTION,
    employeeIroning: {
      employeeName: '',
      approveDate: new Date(),
    },
    varify: {
      employeeName: '',
      approveDate: new Date(),
    },
    employeeStretch: {
      employeeName: '',
      approveDate: new Date(),
    },
    approve: {
      employeeName: '',
      approveDate: new Date(),
    },
    createBy: 'User_Metro',
    updateBy: 'User_Metro',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [newLot, setNewLot] = useState<LotType>({ ...LOT_DEFAULT });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    if (router.isReady && !status) {
      fetchReport(source, reportId as string);
    }

    return () => {
      source.cancel('Operation canceled by the user.');
      setLoading(false);
      setIsOpenModal(false);
      setNewLot({ ...LOT_DEFAULT });
      setReport({
        reportId: reportId as string,
        su: 'SU',
        dateReport: new Date(),
        machine: 'metroiot02',
        duty: '',
        lineLeader: '',
        start: new Date(),
        end: new Date(),
        lots: {},
        department: DEPARTMENT_ENUM.PRODUCTION,
        employeeIroning: {
          employeeName: '',
          approveDate: new Date(),
        },
        varify: {
          employeeName: '',
          approveDate: new Date(),
        },
        employeeStretch: {
          employeeName: '',
          approveDate: new Date(),
        },
        approve: {
          employeeName: '',
          approveDate: new Date(),
        },
        createBy: 'User_Metro',
        updateBy: 'User_Metro',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    };
  }, [router]);

  const fetchReport = async (source: CancelTokenSource, reportId: string) => {
    try {
      setLoading(true);
      const response = await ssrInstance.get<ReportType>(
        `/daliy-report/${reportId}`,
        {
          cancelToken: source.token,
        }
      );

      setReport(reportApiDataTransformToReport(response.data));
    } catch (err) {
      if (!axios.isCancel(err)) {
        Swal.fire({
          title: 'เกิดข้อผิดพลาด',
          text: 'กรุณาติดต่อผู้พัฒนา',
          icon: 'warning',
        }).then(() => {
          router.push('/');
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const onChangeNewLot = (
    event: ChangeEventBaseType<string | Date | null, keyof LotType>
  ) => {
    setNewLot((prev) => ({ ...prev, [event.name]: event.value }));
  };

  const onChangeReport = (
    event: ChangeEventBaseType<Date | null | string, keyof ReportType>
  ) => {
    setReport((prev) => ({ ...prev, [event.name]: event.value }));
  };

  const onChangeReportApprove = (
    event: ChangeEventBaseType<string | Date | null, keyof ReportType>
  ) => {
    const key = event.id as keyof ReportType;
    setReport((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] as ApproveReportType),
        [event.name]: event.value,
      },
    }));
  };

  const onToggleOpenModal = (data: LotType, isNewLot: boolean) => {
    if (isNewLot) {
      const newData = { ...data, lotId: genarateIdNormal() };
      setNewLot({ ...newData });
    } else {
      setNewLot({ ...data });
    }
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setNewLot({ ...LOT_DEFAULT });
    setIsOpenModal(false);
  };

  const onSubmitAddLot = () => {
    setReport((prev) => ({
      ...prev,
      lots: {
        ...prev.lots,
        [newLot.lotId]: {
          ...newLot,
        },
      },
    }));
    setIsOpenModal(false);
    setNewLot({ ...LOT_DEFAULT });
  };

  const onSubmitReport = async () => {
    const data = {
      reportId: reportId as string,
      ...transformDatesToString<object>(report),
    };

    if (status === 'new') {
      // create
      try {
        setLoading(true);
        const data = transformDatesToString<object>(report);
        await ssrInstance.post<ReportType>(`/daliy-report/${reportId}`, {
          ...data,
        });
        Swal.fire({
          title: 'Success',
          text: 'สร้างรายงานสำเร็จ',
          icon: 'success',
        }).then(() => {
          router.push(`/report/${reportId}`);
        });
      } catch (err) {
        if (!axios.isCancel(err)) {
          Swal.fire({
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณาติดต่อผู้พัฒนา',
            icon: 'warning',
          });
        }
      } finally {
        setLoading(false);
      }
    } else {
      // update
      try {
        setLoading(true);
        await ssrInstance.patch<ReportType>(`/daliy-report/${reportId}`, {
          ...data,
        });
        Swal.fire({
          title: 'Success',
          text: 'แก้ไขรายงานสำเร็จ',
          icon: 'success',
        });
      } catch (err) {
        if (!axios.isCancel(err)) {
          Swal.fire({
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณาติดต่อผู้พัฒนา',
            icon: 'warning',
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const onBackPageList = () => {
    router.push(`/`);
  };

  const removeCheck = (lotId: string) => {
    Swal.fire({
      title: 'คุณต้องการจะลบใช่หรือไม่ ?',
      showCancelButton: true,
      confirmButtonText: 'ลบ',
      confirmButtonColor: 'red',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await onDeleteLots(lotId);
      }
    });
  };

  const onDeleteLots = async (lotId: string) => {
    // api
    if (status === 'new') {
      let copyReport = { ...report };
      delete copyReport.lots[lotId];
      setReport({ ...copyReport });
    } else {
      try {
        setLoading(true);
        await ssrInstance.delete<boolean>(
          `/lots-report/${reportId}?lotId=${lotId}`
        );
        // api
        let copyReport = { ...report };
        delete copyReport.lots[lotId];
        setReport({ ...copyReport });
        setLoading(false);
      } catch (err) {
        setLoading(false);

        Swal.fire({
          title: 'เกิดข้อผิดพลาด',
          text: 'กรุณาติดต่อผู้พัฒนา',
          icon: 'warning',
        });
      }
    }
  };

  const onRequestLotsIoT = async () => {
    try {
      setLoading(true);
      const response = await ssrInstance.post<IotServiceType[]>(
        `/iot/${report.machine}`,
        transformToIotApi(report)
      );
      const data = transformApiToLotsReport(lotsList, response.data);
      setReport((prev) => ({ ...prev, lots: { ...data } }));
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

  const lotsList = useMemo<LotType[]>(() => {
    return Object.values(report?.lots || {});
  }, [report]);

  const {
    scrollRef,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleMouseDown,
  } = useScrollbar();
  const {
    page,
    sizePage,
    dataTableList,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
  } = useTable(lotsList, 10);

  return {
    newLot,
    onChangeNewLot,
    report,
    onCloseModal,
    onToggleOpenModal,
    isOpenModal,
    onSubmitAddLot,
    lotsList: dataTableList,
    total: lotsList?.length || 0,
    onChangeReport,
    onChangeReportApprove,
    onBackPageList,
    onSubmitReport,
    isLoading,
    removeCheck,
    onRequestLotsIoT,
    page,
    sizePage,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
    scrollRef,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleMouseDown,
    reportId,
    lotsListPrint: lotsList,
  };
};

export default useDailyReport;
