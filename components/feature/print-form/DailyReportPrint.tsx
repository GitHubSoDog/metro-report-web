import { LotType } from '@/type/lots.type';
import { ReportType } from '@/type/report.type';
import {
  showDateText,
  showLocalDate,
  showLocalTime,
  showMonthText,
  showYearText,
} from '@/utilities/normal-fn';
import { forwardRef } from 'react';

type DailyReportPropsType = {
  report: ReportType | undefined;
  lots: LotType[];
  pageTotal: number[];
};

const DailyReportPrint = forwardRef<HTMLDivElement, DailyReportPropsType>(
  ({ report, lots, pageTotal }, ref) => {
    return (
      <div className="hidden">
        <div
          className="text-center text-[8px]"
          ref={ref}
          style={{ width: '297mm', height: '210mm' }}
        >
          {pageTotal.map((page, index) => (
            <div key={index} className="page-break">
              <span className="font-bold">
                รายงานการผลิตประจำวัน {report?.department || ''}
              </span>
              <br />
              <span className="font-bold">PRODUCTION DAILY REPORT.</span>
              <br />
              <div className="text-end">{report?.su || ''}</div>
              <div className="flex justify-center items-center w-full mb-2">
                วัน
                <span className="underline-text mx-4">
                  {showDateText(report?.dateReport || new Date())}
                </span>
                เดือน
                <span className="underline-text mx-5">
                  {showMonthText(report?.dateReport || new Date())}
                </span>
                พ.ศ.
                <span className="underline-text mx-4">
                  {showYearText(report?.dateReport || new Date())}
                </span>
                เครื่อง
                <span className="underline-text mx-4">
                  {report?.machine || ''}
                </span>
                กะ
                <span className="underline-text mx-4">
                  {report?.duty || ''}
                </span>
                หัวหน้าไลน์
                <span className="underline-text mx-4">
                  {report?.lineLeader || ''}
                </span>
                เริ่ม
                <span className="underline-text ml-4 mr-2">
                  {showLocalTime(report?.start || new Date())}
                </span>
                น. ถึง
                <span className="underline-text ml-4 mr-2">
                  {showLocalTime(report?.end || new Date())}
                </span>
                น.
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
                  {lots
                    .slice((page - 1) * 19, (page - 1) * 19 + 19)
                    .map((row, index) => (
                      <tr key={index}>
                        <td>{row?.lotName || ''}</td>
                        <td>{row.skinType || ''}</td>
                        <td>{row.billetType || ''}</td>
                        <td>{row.customerName || ''}</td>
                        <td>{showLocalTime(row?.start || new Date())}</td>
                        <td>{showLocalTime(row?.end || new Date())}</td>
                        <td>{row.dyNumber || ''}</td>
                        <td>{row.dyScreen || ''}</td>
                        <td>{row.dySkin || ''}</td>
                        <td>{row.billetScreen || ''}</td>
                        <td>{row.billetMiddle || ''}</td>
                        <td>{row.container || ''}</td>
                        <td>{row.boNo || ''}</td>
                        <td>{row.insNo || ''}</td>
                        <td>{row.holeCount || ''}</td>
                        <td>{row.averageWeight || ''}</td>
                        <td>{row.billetWeight || ''}</td>
                        <td>{showLocalDate(row?.factoryDate || new Date())}</td>
                        <td>{row.billetNumber || ''}</td>
                        <td>{row.ironingSize || ''}</td>
                        <td>{row.tendon || ''}</td>
                        <td>{row.billetCount || ''}</td>
                        <td>{row.times || ''}</td>
                        <td>{row.longShop || ''}</td>
                        <td>{row.longExpect || ''}</td>
                        <td>{row.good || ''}</td>
                        <td>{row.waste || ''}</td>
                        <td>{row.wastePercent || ''}</td>
                        <td>{row.speedPull || ''}</td>
                        <td className="max-w-[100px] break-words">
                          {row.desc || ''}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-start">
                  พนักงานรีด{' '}
                  <span className="underline-text mr-4">
                    {report?.employeeIroning?.employeeName || ''}
                  </span>
                  <span className="underline-text ml-4 mr-1">
                    {showDateText(
                      report?.employeeIroning?.approveDate || new Date()
                    )}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showMonthText(
                      report?.employeeIroning?.approveDate || new Date()
                    )}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showYearText(
                      report?.employeeIroning?.approveDate || new Date()
                    )}
                  </span>
                </div>
                <div className="text-end">
                  พนักงานยืด
                  <span className="underline-text mr-4">
                    {report?.employeeStretch?.employeeName || ''}
                  </span>
                  <span className="underline-text ml-4 mr-1">
                    {showDateText(
                      report?.employeeStretch?.approveDate || new Date()
                    )}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showMonthText(
                      report?.employeeStretch?.approveDate || new Date()
                    )}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showYearText(
                      report?.employeeStretch?.approveDate || new Date()
                    )}
                  </span>
                </div>
                <div className="text-start">
                  ตรวจสอบ
                  <span className="underline-text mr-4">
                    {report?.varify?.employeeName || ''}
                  </span>
                  <span className="underline-text ml-4 mr-1">
                    {showDateText(report?.varify?.approveDate || new Date())}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showMonthText(report?.varify?.approveDate || new Date())}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showYearText(report?.varify?.approveDate || new Date())}
                  </span>
                </div>
                <div className="text-end">
                  อนุมัติ
                  <span className="underline-text mr-4">
                    {report?.approve?.employeeName || ''}
                  </span>
                  <span className="underline-text ml-4 mr-1">
                    {showDateText(report?.approve?.approveDate || new Date())}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showMonthText(report?.approve?.approveDate || new Date())}
                  </span>
                  /
                  <span className="underline-text mx-1">
                    {showYearText(report?.approve?.approveDate || new Date())}
                  </span>
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
          ))}
        </div>
      </div>
    );
  }
);
DailyReportPrint.displayName = 'DailyReportPrint';

export default DailyReportPrint;
