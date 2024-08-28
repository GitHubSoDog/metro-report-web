import Button from '@/components/common/Button';
import { LotType } from '@/type/lots.type';
import { Fragment } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';

type DailyReportPropsType = {
  data: LotType[];
  onToggleOpenModal: (data: LotType, isNewLot: boolean) => void;
  onDeleteLots: (lotId: string) => void;
};
const DailyReport = ({
  data = [],
  onToggleOpenModal,
  onDeleteLots,
}: DailyReportPropsType) => {
  return (
    <div>
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
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.lotName}</td>
              <td>{row.skinType}</td>
              <td>{row.billetType}</td>
              <td>{row.customerName}</td>
              <td>{row.start.toLocaleDateString()}</td>
              <td>{row.end.toLocaleDateString()}</td>
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
              <td>{row.factoryDate.toLocaleDateString()}</td>
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
              <td className="min-w-[100px] max-w-[100px] break-words">
                {row.desc}
              </td>
              <td className="min-w-[100px] max-w-[180px] sticky right-0 break-words p-2 bg-white">
                <div className="flex w-full justify-center">
                  <Button
                    id={'Edit'}
                    onClick={() => onToggleOpenModal(row, false)}
                    type={'button'}
                    name={'Edit'}
                    theme="primary"
                    className="mr-2 px-[14px]"
                  >
                    <CiEdit className="text-[16px]" />
                  </Button>
                  <Button
                    id={'remove'}
                    onClick={() => onDeleteLots(row.lotId)}
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
  );
};

export default DailyReport;
