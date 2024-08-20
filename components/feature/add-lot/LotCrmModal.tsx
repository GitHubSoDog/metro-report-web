import DatePickerInput from '@/components/common/DatePickerInput';
import DropDown from '@/components/common/DropDown';
import Modal from '@/components/common/Modal';
import TextInput from '@/components/common/TextInput';
import { ChangeEventBaseType } from '@/type/event';
type LotCrmModalPropsType = {
  newLot: any;
  onChangeNewLot: (event: ChangeEventBaseType<string | Date | null>) => void;
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmitAddLot: () => void;
};
const LotCrmModal = ({
  newLot,
  onChangeNewLot,
  isOpenModal,
  onCloseModal,
  onSubmitAddLot,
}: LotCrmModalPropsType) => {
  if (isOpenModal)
    return (
      <Modal
        title="เพิ่มล็อคการผลิต"
        isOpen={true}
        onClose={onCloseModal}
        onSubmit={onSubmitAddLot}
      >
        <div className="grid gap-6 grid-cols-6">
          <div>
            <h2 className="text-xl font-extrabold dark:text-white">
              Payments tool for companies
            </h2>
          </div>
          <TextInput
            value={''}
            textLabel={'ล็อตที่'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
            maxLength={10}
          />
          <div className="col-span-4" />
          <div />
          <DropDown
            value={''}
            textLabel="ชนิดผิว"
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            disabled={false}
          />
          <DropDown
            value={''}
            textLabel="ชนิดบิลเลท"
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'ลูกค้า'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <div className="col-span-2" />
          <div>เวลาผลิต</div>
          <DatePickerInput
            value={newLot.date}
            textLabel={'เริ่ม'}
            onChange={onChangeNewLot}
            id={'dateLot'}
            name={'date'}
            disabled={false}
            isShowTimeOnly
          />
          <DatePickerInput
            value={newLot.date}
            textLabel={'เสร็จ'}
            onChange={onChangeNewLot}
            id={'dateLot'}
            name={'date'}
            disabled={false}
            isShowTimeOnly
          />
          <TextInput
            value={''}
            textLabel={'ดาย์ เบอร์'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <div className="col-span-2" />
          <div>อุณหภูมิ</div>
          <TextInput
            value={''}
            textLabel={'ดายน์ หน้าจอ'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <DropDown
            value={''}
            textLabel="ดายน์ ผิว"
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'บิลเลท หน้าจอ'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <DropDown
            value={''}
            textLabel="บิลเลท กึ่งกลาง"
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'คอนเทรนเนอร์'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <div>ชุดประกอบร่วม</div>
          <TextInput
            value={''}
            textLabel={'BO NO.'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'INS NO.'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <DropDown
            value={''}
            textLabel="จำนวนรู"
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            disabled={false}
          />
          <DropDown
            value={''}
            textLabel="น้ำหนักเฉลี่ย/เมตร"
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            disabled={false}
          />
          <div />
          <div>บิลเลท</div>
          <TextInput
            value={''}
            textLabel={'น้ำหนักบิลเลท(กก.)/แพ็ค'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <DatePickerInput
            value={newLot.date}
            textLabel={'วันที่เข้าโรงรีด'}
            onChange={onChangeNewLot}
            id={'dateLot'}
            name={'date'}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'หมายเลข บิลเลท'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'ขนาดตัดเพื่อรีด'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <div className="col-span-1" />
          <div />
          <TextInput
            value={''}
            textLabel={'เผื่อบัดเอ็น'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'จำนวน'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <div className="col-span-3" />
          <div>ตัดหน้าเครื่อง</div>
          <TextInput
            value={''}
            textLabel={'ครั้ง/ลูก'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'ความยาวบนร้าน (ม.)'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'ความยาวที่ลูกค้าต้องการ'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <div className="col-span-2" />
          <div>ตัดหน้าเครื่อง</div>
          <TextInput
            value={''}
            textLabel={'ดี'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'เสีย'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'%งานเสีย'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
          <TextInput
            value={''}
            textLabel={'ความเร็วพูลเลอร์ m/min'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />

          <div className="col-span-1" />
          <div className="col-span-1" />
          <TextInput
            value={''}
            textLabel={'หมายเหตุ'}
            onChange={function (event: ChangeEventBaseType<string>): void {
              throw new Error('Function not implemented.');
            }}
            id={''}
            name={''}
            character={[]}
            disabled={false}
          />
        </div>
      </Modal>
    );

  return null;
};
export default LotCrmModal;
