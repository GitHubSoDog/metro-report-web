type DailyReportPropsType = {
  data: any[];
};
const DailyReport = ({ data }: DailyReportPropsType) => {
  return (
    <table className="table-normal">
      <thead>
        <tr>
          <th rowSpan={3}>ลอตที่</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DailyReport;
