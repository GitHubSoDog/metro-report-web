import { ProtectedPageType } from '@/type/event';
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
  master: ProtectedPageType;
  report: ReportType | undefined;
  lots: LotType[];
  pageTotal: number[];
};

const DailyReportPrint = forwardRef<HTMLDivElement, DailyReportPropsType>(
  ({ master, report, lots, pageTotal }, ref) => {
    return (
      <div className="hidden">
        <div
          className="text-center text-[8px]"
          ref={ref}
          style={{
            width: '297mm',
            height: '210mm',
            maxWidth: '297mm',
            maxHeight: '210mm',
          }}
        >
          {pageTotal.map((page, index) => (
            <div key={index} className="page-break">
              <span className="font-bold">
                รายงานการผลิตประจำวัน {report?.department || ''}
              </span>
              <br />
              <div className="font-bold pt-1">PRODUCTION DAILY REPORT.</div>
              <br />
              <div className="text-end pb-1 pr-8">{report?.su || ''}</div>
              <div className="flex justify-center items-end w-full mb-2">
                วัน
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{showDateText(report?.dateReport || new Date())}</span>
                </div>
                เดือน
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{showMonthText(report?.dateReport || new Date())}</span>
                </div>
                พ.ศ.
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{showYearText(report?.dateReport || new Date())}</span>
                </div>
                เครื่อง
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{report?.machine || ''}</span>
                </div>
                กะ
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{report?.duty || ''}</span>
                </div>
                หัวหน้าไลน์
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{report?.lineLeader || ''}</span>
                </div>
                เริ่ม
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span>{showLocalTime(report?.start || new Date())}</span>
                </div>
                น. ถึง
                <div className="mx-2 border-b border-black w-[80px] max-w-[80px] text-center">
                  <span> {showLocalTime(report?.end || new Date())}</span>
                </div>
                น.
              </div>
              <table className="table-print mb-6">
                <thead>
                  <tr>
                    <th rowSpan={3}>ล็อตที่</th>
                    <th rowSpan={3} className="max-w-[80px]">
                      ชนิดผิว
                    </th>
                    <th rowSpan={3} className="min-w-[40px]">
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
                    <th rowSpan={3} className="min-w-[40px]">
                      ความยาวที่ลูกค้า ต้องการ (ม.)
                    </th>
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
                    <th rowSpan={3} className="max-w-[60px]">
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
                      BO.NO
                    </th>
                    <th rowSpan={2} className="max-w-[70px]">
                      INS.NO
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
                      ร้าน (ม.)
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
                        <td>{master?.skinTypeMapping?.[row.skinType] || ''}</td>
                        <td>
                          {master?.billetTypeMapping?.[row.billetType] || ''}
                        </td>
                        <td>{row.customerName || ''}</td>
                        <td>{showLocalTime(row?.start)}</td>
                        <td>{showLocalTime(row?.end)}</td>
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
                        <td>{showLocalDate(row?.factoryDate)}</td>
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
                        <td
                          className={`${
                            row.desc.length > 15 ? 'text-[4px]' : ''
                          } max-w-[60px] break-words`}
                        >
                          {row.desc || ''}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex text-start">
                  <div className="min-w-[50px]">พนักงานรีด </div>
                  <div className="flex items-end w-full">
                    <div className="border-b border-black w-[100px] max-w-[100px] text-center">
                      <span>
                        {master?.employeeIroningMapping?.[
                          report?.employeeIroning?.employeeName || ''
                        ] || ''}
                      </span>
                    </div>
                    <div className="flex items-end w-full">
                      <div className="ml-4 mr-1 border-b border-black w-[20px] max-w-[20px] text-center">
                        <span>
                          {showDateText(
                            report?.employeeIroning?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="mx-1 border-b border-black w-[80px] max-w-[100px] text-center">
                        <span>
                          {showMonthText(
                            report?.employeeIroning?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="ml-1 border-b border-black w-[40px] max-w-[60px] text-center">
                        <span>
                          {showYearText(
                            report?.employeeIroning?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end text-start">
                  <div className="min-w-[50px]">พนักงานยืด</div>
                  <div className="flex items-end">
                    <div className="border-b border-black w-[100px] max-w-[100px] text-center">
                      <span>
                        {master?.employeeStretchMapping?.[
                          report?.employeeStretch?.employeeName || ''
                        ] || ''}
                      </span>
                    </div>
                    <div className="flex items-end">
                      <div className="ml-4 mr-1 border-b border-black w-[20px] max-w-[20px] text-center">
                        <span>
                          {showDateText(
                            report?.employeeStretch?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="mx-1 border-b border-black w-[80px] max-w-[100px] text-center">
                        <span>
                          {showMonthText(
                            report?.employeeStretch?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="ml-1 border-b border-black w-[40px] max-w-[60px] text-center">
                        <span>
                          {showYearText(
                            report?.employeeStretch?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex text-start">
                  <div className="min-w-[50px]">ตรวจสอบ</div>
                  <div className="flex items-end w-full">
                    <div className="border-b border-black w-[100px] max-w-[100px] text-center">
                      <span>
                        {master?.varifyListMapping?.[
                          report?.varify?.employeeName || ''
                        ] || ''}
                      </span>
                    </div>
                    <div className="flex items-end w-full">
                      <div className="ml-4 mr-1 border-b border-black w-[20px] max-w-[20px] text-center">
                        <span>
                          {showDateText(
                            report?.varify?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="mx-1 border-b border-black w-[80px] max-w-[100px] text-center">
                        <span>
                          {showMonthText(
                            report?.varify?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="ml-1 border-b border-black w-[40px] max-w-[60px] text-center">
                        <span>
                          {showYearText(
                            report?.varify?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end text-start">
                  <div className="min-w-[50px]">อนุมัติ</div>
                  <div className="flex items-end">
                    <div className="border-b border-black w-[100px] max-w-[100px] text-center">
                      <span>
                        {master?.approveListMapping?.[
                          report?.approve?.employeeName || ''
                        ] || ''}
                      </span>
                    </div>
                    <div className="flex items-end">
                      <div className="ml-4 mr-1 border-b border-black w-[20px] max-w-[20px] text-center">
                        <span>
                          {showDateText(
                            report?.approve?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="mx-1 border-b border-black w-[80px] max-w-[100px] text-center">
                        <span>
                          {showMonthText(
                            report?.approve?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                      /
                      <div className="ml-1 border-b border-black w-[40px] max-w-[60px] text-center">
                        <span>
                          {showYearText(
                            report?.approve?.approveDate || new Date()
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-evenly">
                <div className="w-full text-center pr-40">( หัวหน้าไลน์ )</div>
                <div className="w-full text-end pr-28">
                  วิศวกรฝ่ายผลิตโรงรีด
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
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
