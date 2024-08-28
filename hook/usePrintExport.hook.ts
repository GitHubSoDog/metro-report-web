import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

type UsePrintExportPropsType = {
  nameReport: string;
};
const usePrintExport = ({ nameReport = 'report' }: UsePrintExportPropsType) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleExportPDF = async () => {
    if (printRef.current) {
      const canvas = await html2canvas(printRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save(nameReport.concat('.pdf'));
    }
  };

  return {
    printRef,
    handlePrint,
    handleExportPDF,
  };
};

export default usePrintExport;
