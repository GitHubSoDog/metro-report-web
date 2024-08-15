import jsPDF from 'jspdf';
import { useRef } from 'react';

const Layout = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const generatePdf = () => {
    const doc = new jsPDF('p', 'mm', 'a4');

    if (formRef.current) {
      doc.html(formRef.current, {
        callback: (doc) => {
          doc.save('form.pdf');
        },
        x: 10,
        y: 10,
        width: 190, // Maximum width of content on PDF
      });
    }
  };
  return (
    <div className="app">
      <Sidebar />
      {process.env.NEXT_PUBLIC_TEST}
      <div className="content">
        <button onClick={generatePdf}>Click</button>
        รายงานการผลิตประจำวัน
        <select>
          <option>Select Factory</option>
        </select>
        Production Daily Report
        <div ref={formRef}>
          <Table />
        </div>
        <Footer />
      </div>
    </div>
  );
};

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <p>apisit</p>
      </div>
      <input type="text" placeholder="Search" className="search" />
      <ul className="menu">
        <li>Line I-1</li>
        <li>Station1</li>
        <li>Station2</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Manual Daily Report</h1>
      <div className="controls">
        <select>
          <option>Select Factory</option>
        </select>
        <select>
          <option>Select date</option>
        </select>
        <select>
          <option>Select month</option>
        </select>
        <select>
          <option>Select year</option>
        </select>
      </div>
    </div>
  );
}

function Table() {
  const data = [
    {
      customer: 'UAI',
      start: '08:00',
      end: '10:13',
      number: '130955.523',
      temperature1: 490,
      temperature2: 490,
      temperature3: 500,
      temperature4: 430,
      component: '1b',
      other: '-',
    },
    {
      customer: 'JOB_B',
      start: '10:13',
      end: '10:21',
      number: '-',
      temperature1: 490,
      temperature2: 490,
      temperature3: 500,
      temperature4: 430,
      component: '-',
      other: '-',
    },
    {
      customer: 'JOB_C',
      start: '10:21',
      end: '10:45',
      number: '-',
      temperature1: 490,
      temperature2: 490,
      temperature3: 500,
      temperature4: 430,
      component: '-',
      other: '-',
    },
  ];
  return (
    <table>
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
            <td className="max-w-[100px] break-words">
              {row.temperature4}
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div>
        <label>พนักงานรีด</label>
        <select>
          <option>Select name</option>
        </select>
        <select>
          <option>Select date</option>
        </select>
        <button>Save</button>
      </div>
      <div>
        <label>ตรวจสอบ</label>
        <select>
          <option>Select name</option>
        </select>
        <select>
          <option>Select date</option>
        </select>
        <button>Save</button>
      </div>
    </div>
  );
}

export default Layout;
