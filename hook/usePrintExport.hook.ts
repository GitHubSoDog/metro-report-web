import { LotType } from '@/type/lots.type';
import { ReportType } from '@/type/report.type';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

type UsePrintExportPropsType = {
  nameReport: string;
};
const usePrintExport = ({ nameReport = 'report' }: UsePrintExportPropsType) => {
  const [reportPrint, setReportPrint] = useState<ReportType>();
  const [lotsPrint, setLotsPrint] = useState<LotType[]>([]);
  const [totalPagePrint, setTotalPagePrint] = useState<number[]>([]);
  const [isPrintLoading, setIsPrintLoading] = useState<boolean>(false);
  const printRef = useRef<HTMLDivElement>(null);
  let timer: ReturnType<typeof setTimeout>;

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    removeAfterPrint: true,
    onAfterPrint: () => clearStatePrint(),
  });

  const onClickPrint = (report: ReportType) => {
    setIsPrintLoading(true);
    setReportPrint(report);
    setLotsPrint(Object.values(report.lots || {}));
    setTotalPagePrint(
      Array.from(
        {
          length: Math.ceil(Object.values(report.lots || {}).length / 19),
        },
        (_, i) => i + 1
      )
    );
    timer = setTimeout(() => {
      handlePrint();
    }, 2000);
  };

  const clearStatePrint = () => {
    clearTimeout(timer);
    setReportPrint(undefined);
    setTotalPagePrint([]);
    setLotsPrint([]);
    setIsPrintLoading(false);
  };

  return {
    printRef,
    reportPrint,
    onClickPrint,
    lotsPrint,
    totalPagePrint,
    isPrintLoading,
  };
};

export default usePrintExport;
