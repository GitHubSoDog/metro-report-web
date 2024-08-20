import Button from '@/components/common/Button';
import { Fragment, MouseEvent } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete, MdDeleteSweep } from 'react-icons/md';
import Pagination from '../pagination/Pagination';
import useTable from '@/hook/useTable.hook';

type DailyReportPropsType = {
  data: any[];
};
const DailyReport = ({ data }: DailyReportPropsType) => {
  const {
    fieldNameSort,
    handleSorting,
    page,
    sizePage,
    dataTableList: dataLots,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
  } = useTable<any>(data, 19);
  return (
    <Fragment>
      <div className="overflow-y-auto">
        <table className="table-normal">
          <thead>
            <tr>
              <th rowSpan={3}>ล็อตที่</th>
              <th rowSpan={3} className="min-w-[80px]">
                ชนิดผิว
              </th>
              <th rowSpan={3} className="min-w-[80px]">
                ชนิด
                <br />
                บิลเลท
              </th>
              <th rowSpan={3}>ลูกค้า</th>
              <th colSpan={2} className="min-w-[80px]">
                เวลาผลิต
              </th>
              <th>ดายน์</th>
              <th colSpan={5}>อุณหภูมิ °C</th>
              <th colSpan={2}>ชุดประกอบร่วม</th>
              <th rowSpan={3} className="rotated">
                จำนวนรู
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
              <th rowSpan={3} className="max-w-[120px] sticky right-0 bg-white">
                Action
              </th>
            </tr>
            <tr>
              <th rowSpan={2}>เริ่ม</th>
              <th rowSpan={2}>เสร็จ</th>
              <th rowSpan={2}>เบอร์</th>
              <th colSpan={2}>ดายน์</th>
              <th colSpan={2}>บิลเลท</th>
              <th rowSpan={2}>
                คอน
                <br />
                เทน
                <br />
                เนอร์
              </th>
              <th rowSpan={2} className="min-w-[70px]">
                BO NO
              </th>
              <th rowSpan={2} className="min-w-[70px]">
                INS NO
              </th>
              <th rowSpan={2} className="min-w-[60px]">
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
              <th className="min-w-[60px]">หน้าจอ</th>
              <th>ผิว</th>
              <th className="min-w-[60px]">หน้าจอ</th>
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
            {dataLots.map((row, index) => (
              <tr key={index}>
                <td>{row.customer}</td>
                <td>{row.start}</td>
                <td>{row.end}</td>
                <td>xxx</td>
                <td>17:00</td>
                <td>17:00</td>
                <td>{row.number}</td>
                <td>xxx</td>
                <td>xxx</td>
                <td>xxx</td>
                <td>xxx</td>
                <td>430</td>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
                <td>{row.temperature2}</td>
                <td>{row.temperature3}</td>
                <td>{row.temperature4}</td>
                <td>xxxxxxxxxx</td>
                <td>{row.other}xx</td>
                <td>xx</td>
                <td>xx</td>
                <td>xxx</td>
                <td>xxx</td>
                <td>xxx</td>
                <td>{row.temperature2}</td>
                <td>{row.temperature3}</td>
                <td>{row.temperature4}</td>
                <td>{row.temperature3}</td>
                <td className="min-w-[100px] max-w-[100px] break-words">
                  {row.temperature4}xxxxxxxx
                </td>
                <td className="min-w-[100px] max-w-[180px] sticky right-0 break-words p-2 bg-white">
                  <div className="flex w-full justify-center">
                    <Button
                      id={'Edit'}
                      onClick={() => row.reportId}
                      type={'button'}
                      name={'Edit'}
                      theme="primary"
                      className="mr-2 px-[14px]"
                    >
                      <CiEdit className="text-[16px]" />
                    </Button>
                    <Button
                      id={'remove'}
                      onClick={() => row.reportId}
                      type={'button'}
                      name={'remove'}
                      theme="danger"
                      className="px-[14px]"
                    >
                      <MdDelete className="text-[16px]" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        sizePage={sizePage}
        page={page}
        handlePerPage={handlePerPage}
        firstPage={firstPage}
        handlePage={handlePage}
        finalPage={finalPage}
        totalData={data.length}
        setupPerPage={[19]}
      />
    </Fragment>
  );
};

export default DailyReport;
