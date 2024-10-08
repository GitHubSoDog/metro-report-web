import Button from '@/components/common/Button';
import { LotType } from '@/type/lots.type';
import {
  formatNumber,
  showLocalDate,
  showLocalTime,
} from '@/utilities/normal-fn';
import { ChangeEvent, Fragment, RefObject } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Pagination from '../pagination/Pagination';

type LotsTablePropsType = {
  data: LotType[];
  onToggleOpenModal: (data: LotType, isNewLot: boolean) => void;
  removeCheck: (lotId: string) => void;
  page: number;
  sizePage: number;
  handlePerPage: (event: ChangeEvent<HTMLSelectElement>) => void;
  handlePage: (count: number) => void;
  firstPage: () => void;
  finalPage: () => void;

  scrollRef: RefObject<HTMLDivElement>;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: () => void;
  handleMouseLeave: () => void;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  total: number;
  skinTypeMapping: Record<string, string>;
  billetTypeMapping: Record<string, string>;
};

const LotsTable = ({
  data,
  onToggleOpenModal,
  removeCheck,
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
  total,
  skinTypeMapping,
  billetTypeMapping,
}: LotsTablePropsType) => {
  return (
    <Fragment>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="overflow-y-auto hover:cursor-pointer"
      >
        <table className="table-custom">
          <thead>
            <tr className="bg-[#e4e6f0] text-black">
              <th rowSpan={3} className="min-w-[100px] ">
                ล็อตที่
              </th>
              <th rowSpan={3} className="min-w-[80px]">
                ชนิดผิว
              </th>
              <th rowSpan={3} className="min-w-[80px]">
                ชนิด
                <br />
                บิลเลท
              </th>
              <th rowSpan={3} className="min-w-[80px]">
                ลูกค้า
              </th>
              <th colSpan={2} className="min-w-[80px]">
                เวลาผลิต
              </th>
              <th>ดายน์</th>
              <th colSpan={5}>อุณหภูมิ °C</th>
              <th colSpan={2}>ชุดประกอบร่วม</th>
              <th rowSpan={3} className="min-w-[80px]">
                จำนวนรู
              </th>
              <th rowSpan={3} className="min-w-[140px]">
                น้ำหนักเฉลี่ย/เมตร
              </th>
              <th colSpan={6}>บิลเลท</th>
              <th colSpan={2}>ตัดหน้าเครื่อง</th>
              <th rowSpan={3} className="min-w-[80px]">
                ความยาวที่ลูกค้า ต้องการ (ม.)
              </th>
              <th colSpan={3} rowSpan={2} className="min-w-[160px]">
                จำนวนเส้นที่ตัดได้
              </th>
              <th rowSpan={3} className="min-w-[140px]">
                ความเร็วพูลเลอร์
                <br />
                m/min
              </th>
              <th rowSpan={3} className="min-w-[120px]">
                หมายเหตุ
              </th>
              <th
                rowSpan={3}
                className="min-w-[120px] sticky right-0 border-solid border border-[#323338] bg-[#e4e6f0] text-black"
              >
                Action
              </th>
            </tr>
            <tr className="bg-[#d0daf8] text-black">
              <th rowSpan={2}>เริ่ม</th>
              <th rowSpan={2}>เสร็จ</th>
              <th rowSpan={2}>เบอร์</th>
              <th colSpan={2}>ดายน์</th>
              <th colSpan={2}>บิลเลท</th>
              <th rowSpan={2} className="min-w-[80px]">
                คอนเทนเนอร์
              </th>
              <th rowSpan={2} className="min-w-[70px]">
                BO.NO
              </th>
              <th rowSpan={2} className="min-w-[70px]">
                INS.NO
              </th>
              <th rowSpan={2} className="min-w-[100px]">
                น.น บิลเลท
                <br />
                (ก.ก)/แพ็ค
              </th>
              <th rowSpan={2} className="min-w-[100px]">
                ว.ด.ป ที่ บิลเลท เข้าโรงรีด
              </th>
              <th rowSpan={2} className="min-w-[130px]">
                หมายเลข บิลเลท
              </th>
              <th rowSpan={2} className="min-w-[130px]">
                ขนาดตัดเพื่อรีด
              </th>
              <th rowSpan={2} className="min-w-[130px]">
                *** เผื่อบัดเอ็น
              </th>
              <th rowSpan={2}>จำนวน</th>
              <th rowSpan={2} className="min-w-[80px]">
                ครั้ง / ลูก
              </th>
              <th rowSpan={2} className="min-w-[120px]">
                ความยาวบนร้าน (ม.)
              </th>
            </tr>
            <tr className="bg-[#e4e6f0] text-black">
              <th className="min-w-[60px]">หน้าจอ</th>
              <th>ผิว</th>
              <th className="min-w-[60px]">หน้าจอ</th>
              <th>กึ่งกลาง</th>
              <th rowSpan={1} className="min-w-[40px]">
                ดี
              </th>
              <th rowSpan={1} className="min-w-[50px]">
                เสีย
              </th>
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
                <td>{skinTypeMapping?.[row.skinType] || ''}</td>
                <td>{billetTypeMapping?.[row.billetType] || ''}</td>
                <td>{row.customerName}</td>
                <td>{showLocalTime(row?.start)}</td>
                <td>{showLocalTime(row?.end)}</td>
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
                <td>{showLocalDate(row.factoryDate)}</td>
                <td>{row.billetNumber}</td>
                <td>{row.ironingSize}</td>
                <td>{row.tendon}</td>
                <td>{row.billetCount}</td>
                <td>{row.times}</td>
                <td>{row.longShop}</td>
                <td>{row.longExpect}</td>
                <td>{formatNumber(row.good)}</td>
                <td>{formatNumber(row.waste)}</td>
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
                      onClick={() => removeCheck(row.lotId)}
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
        totalData={total}
        setupPerPage={[10]}
      />
    </Fragment>
  );
};
export default LotsTable;
