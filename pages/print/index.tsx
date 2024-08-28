import React, { forwardRef, Fragment, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@/components/common/Button';
import { LotType } from '@/type/lots.type';

const ReportContainer: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);
  // Sample data
  const dataMock: any[] = [
    {
      lotId: '65bcb46475',
      lotName: '20240828_Test',
      skinType: 'WHTIE',
      billetType: '1050',
      customerName: 'test',
      start: '2024-08-27T18:00:00.000Z',
      end: '2024-08-27T19:00:00.000Z',
      dyNumber: '123',
      dyScreen: '1312',
      dySkin: '13131',
      billetScreen: '424',
      billetMiddle: '4232',
      container: '140',
      boNo: '343',
      insNo: '1231',
      holeCount: '12',
      averageWeight: '31.54',
      billetWeight: '123',
      factoryDate: '2024-08-27T18:28:34.315Z',
      billetNumber: '566456445',
      ironingSize: '123',
      tendon: '10',
      billetCount: '15',
      times: '456',
      longShop: '784',
      longExpect: '748',
      good: '1322',
      waste: '3142',
      wastePercent: '87',
      speedPull: '14',
      desc: 'ทดสอบ',
    },
    // Add more sample data
  ];
  const data = dataMock.flatMap((obj) => Array(19).fill({ ...obj }));

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleExportPDF = async () => {
    if (printRef.current) {
      const canvas = await html2canvas(printRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save('report.pdf');
    }
  };

  return (
    <Fragment>
      <Button
        className="no-print"
        onClick={handlePrint}
        id={''}
        type={'button'}
        name={''}
      >
        Print
      </Button>
      <Button
        className="no-print"
        onClick={handleExportPDF}
        id={''}
        type={'button'}
        name={''}
      >
        Export as PDF
      </Button>
      <TableComponent data={data} ref={printRef} />
    </Fragment>
  );
};

export default ReportContainer;

type TableComponentProps = {
  data: any[];
};

const TableComponent = forwardRef<HTMLDivElement, TableComponentProps>(
  ({ data }, ref) => {
    return (
      <div
        className="text-center text-[8px]"
        ref={ref}
        style={{ width: '297mm', height: '210mm', padding: '38px 18px' }}
      >
        <div>
          <span className="font-bold">
            รายงานการผลิตประจำวัน ฝ่ายผลิตโรงรีด
          </span>
          <br />
          <span className="font-bold">PRODUCTION DAILY REPORT.</span>
          <br />
          <div className="text-end">su-1231-12321</div>
          <div className="flex justify-center items-center w-full mb-2">
            วัน
            <span className="underline-text mx-4">20</span> เดือน
            <span className="underline-text mx-5">พฤษภาคม</span> พ.ศ.
            <span className="underline-text mx-4">2567</span>
            เครื่อง<span className="underline-text mx-4">none</span>
            กะ<span className="underline-text mx-4">เช้า</span>
            หัวหน้าไลน์
            <span className="underline-text mx-4">เบญจพล</span>เริ่ม
            <span className="underline-text ml-4 mr-2">16:00</span>น. ถึง
            <span className="underline-text ml-4 mr-2">23:00</span>น.
          </div>
          <table className="table-print mb-6">
            <thead>
              <tr>
                <th rowSpan={3}>ล็อตที่</th>
                <th rowSpan={3} className="max-w-[80px]">
                  ชนิดผิว
                </th>
                <th rowSpan={3} className="max-w-[80px]">
                  ชนิด
                  <br />
                  บิลเลท
                </th>
                <th rowSpan={3}>ลูกค้า</th>
                <th colSpan={2} className="max-w-[80px]">
                  เวลาผลิต
                </th>
                <th>ดายน์</th>
                <th colSpan={5}>อุณหภูมิ °C</th>
                <th colSpan={2}>ชุดประกอบร่วม</th>
                <th rowSpan={3}>
                  <div className="rotated">จำนวนรู</div>
                </th>
                <th rowSpan={3}>
                  น้ำหนักเฉลี่ย/ <br />
                  เมตร
                </th>
                <th colSpan={6}>บิลเลท</th>
                <th colSpan={2}>ตัดหน้าเครื่อง</th>
                <th>ความยาวที่</th>
                <th colSpan={3} rowSpan={2}>
                  จำนวนเส้นที่ตัดได้
                </th>
                <th rowSpan={3}>
                  ความเร็ว
                  <br />
                  พูลเลอร์
                  <br />
                  m/min
                </th>
                <th rowSpan={3} className="max-w-[120px]">
                  หมายเหตุ
                </th>
              </tr>
              <tr>
                <th rowSpan={2}>เริ่ม</th>
                <th rowSpan={2}>เสร็จ</th>
                <th rowSpan={2}>เบอร์</th>
                <th colSpan={2}>ดายน์</th>
                <th colSpan={2}>บิลเลท</th>
                <th rowSpan={2} className="min-w-[30px]">
                  คอน
                  <br />
                  เทน
                  <br />
                  เนอร์
                </th>
                <th rowSpan={2} className="max-w-[70px]">
                  BO NO
                </th>
                <th rowSpan={2} className="max-w-[70px]">
                  INS NO
                </th>
                <th rowSpan={2} className="max-w-[60px]">
                  น.น บิลเลท
                  <br />
                  (ก.ก)/แพ็ค
                </th>
                <th rowSpan={2} className="min-w-[60px]">
                  ว.ด.ป ที่ <br />
                  บิลเลท <br />
                  เข้าโรงรีด
                </th>
                <th rowSpan={2} className="max-w-[110px]">
                  หมายเลข บิลเลท
                </th>
                <th rowSpan={2}>
                  ขนาด
                  <br />
                  ตัด
                  <br />
                  เพื่อรีด
                </th>
                <th rowSpan={2}>
                  ***
                  <br /> เผื่อบัด
                  <br />
                  เอ็น
                </th>
                <th rowSpan={2}>จำนวน</th>
                <th rowSpan={2}>
                  ครั้ง /<br /> ลูก
                </th>
                <th rowSpan={2}>
                  ความ
                  <br />
                  ยาวบน <br />
                  ร้าน (น.)
                </th>
                <th rowSpan={2}>
                  ลูกค้า
                  <br />
                  ต้องการ
                  <br />
                  (ม.)
                </th>
              </tr>
              <tr>
                <th className="max-w-[60px]">หน้าจอ</th>
                <th>ผิว</th>
                <th className="max-w-[60px]">หน้าจอ</th>
                <th>กึ่งกลาง</th>
                <th rowSpan={1}>ดี</th>
                <th rowSpan={1}>เสีย</th>
                <th rowSpan={1}>
                  ***
                  <br />
                  %งานเสีย
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.lotName}</td>
                  <td>{row.skinType}</td>
                  <td>{row.billetType}</td>
                  <td>{row.customerName}</td>
                  {/* <td>{row.start.toLocaleDateString()}</td>
                <td>{row.end.toLocaleDateString()}</td> */}
                  <td>{row.dyNumber}</td>
                  <td>{row.dyScreen}</td>
                  <td>{row.dyNumber}</td>
                  <td>{row.dyScreen}</td>
                  <td>{row.dySkin}</td>
                  <td>{row.billetScreen}</td>
                  <td>{row.billetMiddle}</td>
                  <td>{row.container}</td>
                  <td>{row.boNo}</td>
                  <td>{row.insNo}</td>
                  <td>{row.holeCount}</td>
                  <td>{row.averageWeight}</td>
                  <td>{row.billetWeight}</td>
                  <td>{row.billetWeight}</td>

                  {/* <td>{row.factoryDate.toLocaleDateString()}</td> */}
                  <td>{row.billetNumber}</td>
                  <td>{row.ironingSize}</td>
                  <td>{row.tendon}</td>
                  <td>{row.billetCount}</td>
                  <td>{row.times}</td>
                  <td>{row.longShop}</td>
                  <td>{row.longExpect}</td>
                  <td>{row.good}</td>
                  <td>{row.waste}</td>
                  <td>{row.wastePercent}</td>
                  <td>{row.speedPull}</td>
                  <td className="max-w-[100px] break-words">
                    {row.desc}
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-start">
              พนักงานรีด <span className="underline-text mx-4">ปราชัย</span>
              <span className="underline-text ml-4 mr-1">20</span>/
              <span className="underline-text mx-1">20</span>/
              <span className="underline-text mx-1">20</span>
            </div>
            <div className="text-end">
              พนักงานยืด
              <span className="underline-text mx-4">ปราชัย</span>
              <span className="underline-text ml-4 mr-1">20</span>/
              <span className="underline-text mx-1">20</span>/
              <span className="underline-text mx-1">20</span>
            </div>
            <div className="text-start">
              ตรวจสอบ
              <span className="underline-text mx-4">ปราชัย</span>
              <span className="underline-text ml-4 mr-1">20</span>/
              <span className="underline-text mx-1">20</span>/
              <span className="underline-text mx-1">20</span>
            </div>
            <div className="text-end">
              อนุมัติ
              <span className="underline-text mx-4">ปราชัย</span>
              <span className="underline-text ml-4 mr-1">20</span>/
              <span className="underline-text mx-1">20</span>/
              <span className="underline-text mx-1">20</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-start">
              <span>
                * หมายเหตุ
                การวัดอุณหภูมิดายน์ให้วัดที่ผิวและอุณหภูมิบิลเลทให้วัดที่บริเวณกึ่งกลางโดยใช้เทอร์โมมิเตอร์วัดและใช้ค่าจริงบันทึก
              </span>
              <br />
              <span>
                * หมายเหตุ การวัดอุณหภูมิบิลเลท
                ให้วัดลูกแรกที่ตัดเข้ารีดกรณีที่รีดไม่ได้ให้ใช้ค่าแรกบันทึกกรณีที่รีดได้ให้ใช้คำอุณหภูมิที่ปรับค่าที่ดีที่สุดบันทึก
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
