import DatePickerInput from '@/components/common/DatePickerInput';
import DropDown from '@/components/common/DropDown';
import Modal from '@/components/common/Modal';
import TextInput from '@/components/common/TextInput';
import { BILLET_TYPE, SKIN_TYPE } from '@/constants/master-data';
import { ChangeEventBaseType } from '@/type/event';
import { LotType } from '@/type/lots.type';
type LotCrmModalPropsType = {
  newLot: LotType;
  onChangeNewLot: (
    event: ChangeEventBaseType<string | Date | null, keyof LotType>
  ) => void;
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
            <h2 className="text-xl font-extrabold">{newLot.lotName}</h2>
          </div>
          <TextInput<string, keyof LotType>
            value={newLot.lotName}
            textLabel={'ล็อตที่'}
            onChange={onChangeNewLot}
            id={'lotName'}
            name={'lotName'}
            maxLength={15}
          />
          <div className="col-span-4" />
          <div />
          <DropDown
            value={newLot.skinType}
            textLabel="ชนิดผิว"
            onChange={onChangeNewLot}
            id={'skinType'}
            name={'skinType'}
            option={SKIN_TYPE}
          />
          <DropDown
            value={newLot.billetType}
            textLabel="ชนิดบิลเลท"
            onChange={onChangeNewLot}
            id={'billetType'}
            name={'billetType'}
            option={BILLET_TYPE}
          />
          <TextInput
            value={newLot.customerName}
            textLabel={'ลูกค้า'}
            onChange={onChangeNewLot}
            id={'customerName'}
            name={'customerName'}
            maxLength={20}
          />
          <div className="col-span-2" />
          <div>เวลาผลิต</div>
          <DatePickerInput
            value={newLot.start}
            textLabel={'เริ่ม'}
            onChange={onChangeNewLot}
            id={'start'}
            name={'start'}
            disabled={false}
            isShowTimeOnly
          />
          <DatePickerInput
            value={newLot.end}
            textLabel={'เสร็จ'}
            onChange={onChangeNewLot}
            id={'end'}
            name={'end'}
            disabled={false}
            isShowTimeOnly
          />
          <TextInput
            value={newLot.dyNumber}
            textLabel={'ดาย์ เบอร์'}
            onChange={onChangeNewLot}
            id={'dyNumber'}
            name={'dyNumber'}
            character={['number']}
            maxLength={8}
          />
          <div className="col-span-2" />
          <div>อุณหภูมิ</div>
          <TextInput
            value={newLot.dyScreen}
            textLabel={'ดายน์ หน้าจอ'}
            onChange={onChangeNewLot}
            id={'dyScreen'}
            name={'dyScreen'}
            character={['number', 'dot']}
            isShowIcon
            maxLength={5}
          />
          <TextInput
            value={newLot.dySkin}
            textLabel="ดายน์ ผิว"
            onChange={onChangeNewLot}
            id={'dySkin'}
            name={'dySkin'}
            isShowIcon
            character={['number', 'dot']}
            maxLength={5}
          />
          <TextInput
            value={newLot.billetScreen}
            textLabel={'บิลเลท หน้าจอ'}
            onChange={onChangeNewLot}
            id={'billetScreen'}
            name={'billetScreen'}
            character={['number', 'dot']}
            maxLength={5}
            isShowIcon
          />
          <TextInput
            value={newLot.billetMiddle}
            textLabel="บิลเลท กึ่งกลาง"
            onChange={onChangeNewLot}
            id={'billetMiddle'}
            name={'billetMiddle'}
            isShowIcon
            character={['number', 'dot']}
            maxLength={5}
          />
          <TextInput
            value={newLot.container}
            textLabel={'คอนเทรนเนอร์'}
            onChange={onChangeNewLot}
            id={'container'}
            name={'container'}
            character={['number', 'dot']}
            maxLength={5}
            isShowIcon
          />
          <div>ชุดประกอบร่วม</div>
          <TextInput
            value={newLot.boNo}
            textLabel={'BO NO.'}
            onChange={onChangeNewLot}
            id={'boNo'}
            name={'boNo'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <TextInput
            value={newLot.insNo}
            textLabel={'INS NO.'}
            onChange={onChangeNewLot}
            id={'insNo'}
            name={'insNo'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <TextInput
            value={newLot.holeCount}
            textLabel="จำนวนรู"
            onChange={onChangeNewLot}
            id={'holeCount'}
            name={'holeCount'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <TextInput
            value={newLot.averageWeight}
            textLabel="น้ำหนักเฉลี่ย/เมตร"
            onChange={onChangeNewLot}
            id={'averageWeight'}
            name={'averageWeight'}
            character={['number', 'dot']}
            maxLength={5}
          />
          <div />
          <div>บิลเลท</div>
          <TextInput
            value={newLot.billetWeight}
            textLabel={'น้ำหนักบิลเลท(กก.)/แพ็ค'}
            onChange={onChangeNewLot}
            id={'billetWeight'}
            name={'billetWeight'}
            character={['number', 'dot']}
            maxLength={5}
          />
          <DatePickerInput
            value={newLot.factoryDate}
            textLabel={'วันที่เข้าโรงรีด'}
            onChange={onChangeNewLot}
            id={'factoryDate'}
            name={'factoryDate'}
          />
          <TextInput
            value={newLot.billetNumber}
            textLabel={'หมายเลข บิลเลท'}
            onChange={onChangeNewLot}
            id={'billetNumber'}
            name={'billetNumber'}
            character={['number', 'eng', 'dot']}
            maxLength={9}
          />
          <TextInput
            value={newLot.ironingSize}
            textLabel={'ขนาดตัดเพื่อรีด'}
            onChange={onChangeNewLot}
            id={'ironingSize'}
            name={'ironingSize'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <div className="col-span-1" />
          <div />
          <TextInput
            value={newLot.tendon}
            textLabel={'เผื่อบัดเอ็น'}
            onChange={onChangeNewLot}
            id={'tendon'}
            name={'tendon'}
            maxLength={4}
          />
          <TextInput
            value={newLot.billetCount}
            textLabel={'จำนวน'}
            onChange={onChangeNewLot}
            id={'billetCount'}
            name={'billetCount'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <div className="col-span-3" />
          <div>ตัดหน้าเครื่อง</div>
          <TextInput
            value={newLot.times}
            textLabel={'ครั้ง/ลูก'}
            onChange={onChangeNewLot}
            id={'times'}
            name={'times'}
            character={['number']}
            maxLength={4}
          />
          <TextInput
            value={newLot.longShop}
            textLabel={'ความยาวบนร้าน (ม.)'}
            onChange={onChangeNewLot}
            id={'longShop'}
            name={'longShop'}
            character={['number', 'dot']}
            maxLength={6}
          />
          <TextInput
            value={newLot.longExpect}
            textLabel={'ความยาวที่ลูกค้าต้องการ'}
            onChange={onChangeNewLot}
            id={'longExpect'}
            name={'longExpect'}
            character={['number', 'dot']}
            maxLength={6}
          />
          <div className="col-span-2" />
          <div>ตัดหน้าเครื่อง</div>
          <TextInput
            value={newLot.good}
            textLabel={'ดี'}
            onChange={onChangeNewLot}
            id={'good'}
            name={'good'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <TextInput
            value={newLot.waste}
            textLabel={'เสีย'}
            onChange={onChangeNewLot}
            id={'waste'}
            name={'waste'}
            character={['number', 'dot']}
            maxLength={4}
          />
          <TextInput
            value={newLot.wastePercent}
            textLabel={'%งานเสีย'}
            onChange={onChangeNewLot}
            id={'wastePercent'}
            name={'wastePercent'}
            character={['number', 'dot']}
            maxLength={6}
          />
          <TextInput
            value={newLot.speedPull}
            textLabel={'ความเร็วพูลเลอร์ m/min'}
            onChange={onChangeNewLot}
            id={'speedPull'}
            name={'speedPull'}
            character={['number', 'dot']}
            maxLength={6}
          />

          <div className="col-span-1" />
          <div className="col-span-1" />
          <TextInput
            value={newLot.desc}
            textLabel={'หมายเหตุ'}
            onChange={onChangeNewLot}
            id={'desc'}
            name={'desc'}
            maxLength={30}
          />
        </div>
      </Modal>
    );

  return null;
};
export default LotCrmModal;
