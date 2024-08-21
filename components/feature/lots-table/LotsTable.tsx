import Button from '@/components/common/Button';
import useTable from '@/hook/useTable.hook';
import { LotType } from '@/type/lots.type';
import { Fragment } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Pagination from '../pagination/Pagination';
import useScrollbar from '@/hook/useScrollbar.hook';
import { showLocalDate, showLocalTime } from '@/utilities/normal-fn';

type LotsTablePropsType = {
  data: LotType[];
  onToggleOpenModal: (data: LotType, isNewLot: boolean) => void;
  onDeleteLots: (lotId: string) => void;
};

const LotsTable = ({
  data,
  onToggleOpenModal,
  onDeleteLots,
}: LotsTablePropsType) => {
  const {
    scrollRef,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleMouseDown,
  } = useScrollbar();
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
  } = useTable(data, 10);

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
            <tr className="bg-[#323338] text-white">
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
              <th>ความยาวที่</th>
              <th colSpan={3} rowSpan={2} className="min-w-[160px]">
                จำนวนเส้นที่ตัดได้
              </th>
              <th rowSpan={3} className="min-w-[130px]">
                ความเร็วพูลเลอร์
                <br />
                m/min
              </th>
              <th rowSpan={3} className="min-w-[120px]">
                หมายเหตุ
              </th>
              <th
                rowSpan={3}
                className="min-w-[120px] sticky right-0 border-solid border border-[#323338] bg-[#323338] text-white"
              >
                Action
              </th>
            </tr>
            <tr className="bg-[#555556] text-white">
              <th rowSpan={2}>เริ่ม</th>
              <th rowSpan={2}>เสร็จ</th>
              <th rowSpan={2}>เบอร์</th>
              <th colSpan={2}>ดายน์</th>
              <th colSpan={2}>บิลเลท</th>
              <th rowSpan={2} className="min-w-[80px]">
                คอนเทนเนอร์
              </th>
              <th rowSpan={2} className="min-w-[70px]">
                BO NO
              </th>
              <th rowSpan={2} className="min-w-[70px]">
                INS NO
              </th>
              <th rowSpan={2} className="min-w-[100px]">
                น.น บิลเลท
                <br />
                (ก.ก)/แพ็ค
              </th>
              <th rowSpan={2} className="min-w-[60px]">
                ว.ด.ป ที่ <br />
                บิลเลท <br />
                เข้าโรงรีด
              </th>
              <th rowSpan={2} className="min-w-[130px]">
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
            <tr className="bg-[#45464b] text-white">
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
                <td>{row.lotName}</td>
                <td>{row.skinType}</td>
                <td>{row.billetType}</td>
                <td>{row.customerName}</td>
                <td>{showLocalTime(row.start)}</td>
                <td>{showLocalTime(row.end)}</td>
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
      <Pagination
        sizePage={sizePage}
        page={page}
        handlePerPage={handlePerPage}
        firstPage={firstPage}
        handlePage={handlePage}
        finalPage={finalPage}
        totalData={data.length}
        setupPerPage={[10]}
      />
    </Fragment>
  );
};
export default LotsTable;
