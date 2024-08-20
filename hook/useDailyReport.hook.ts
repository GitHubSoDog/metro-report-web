import { ChangeEventBaseType } from '@/type/event';
import { useState } from 'react';

const useDailyReport = () => {
  const [report, setReport] = useState({
    reportId: '1234',
    lots: new Array(24).fill({
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
    }),
    createBy: 'Ben',
    updateBy: 'Ben',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [newLot, setNewLot] = useState({
    date: new Date(),
    temp: '',
    lotName: '',
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onChangeNewLot = (event: ChangeEventBaseType<string | Date | null>) => {
    setNewLot((prev) => ({ ...prev, [event.name]: event.value }));
  };

  const onToggleOpenModal = (data: any) => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onSubmitAddLot = () => {
    setIsOpenModal(false);
  };

  return {
    newLot,
    onChangeNewLot,
    report,
    onCloseModal,
    onToggleOpenModal,
    isOpenModal,
    onSubmitAddLot,
  };
};

export default useDailyReport;
