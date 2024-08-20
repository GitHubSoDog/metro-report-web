import { LOT_DEFAULT } from '@/constants/lot';
import { ChangeEventBaseType } from '@/type/event';
import { LotType } from '@/type/lots.type';
import { ApproveReportType, ReportType } from '@/type/report.type';
import { genarateIdNormal } from '@/utilities/normal-fn';
import { useMemo, useState } from 'react';

const useDailyReport = () => {
  const [report, setReport] = useState<ReportType>({
    id: '',
    lots: {},
    createBy: '',
    updateBy: '',
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
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [newLot, setNewLot] = useState<LotType>({ ...LOT_DEFAULT });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onChangeNewLot = (
    event: ChangeEventBaseType<string | Date | null, keyof LotType>
  ) => {
    setNewLot((prev) => ({ ...prev, [event.name]: event.value }));
  };

  const onChangeReport = (
    event: ChangeEventBaseType<string, keyof ReportType>
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

  const onDeleteLots = (lotId: string) => {
    // api

    // api
    let copyReport = { ...report };
    delete copyReport.lots[lotId];
    setReport({ ...copyReport });
  };

  const lotsList = useMemo<LotType[]>(() => {
    return Object.values(report?.lots || {});
  }, [report]);

  return {
    newLot,
    onChangeNewLot,
    report,
    onCloseModal,
    onToggleOpenModal,
    isOpenModal,
    onSubmitAddLot,
    lotsList,
    onDeleteLots,
    onChangeReport,
    onChangeReportApprove,
  };
};

export default useDailyReport;
