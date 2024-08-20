import Button from '@/components/common/Button';
import DatePickerInput from '@/components/common/DatePickerInput';
import DropDown from '@/components/common/DropDown';
import TextInput from '@/components/common/TextInput';
import LotCrmModal from '@/components/feature/add-lot/LotCrmModal';
import DailyReport from '@/components/feature/print-form/DailyReport';
import { LOT_DEFAULT } from '@/constants/lot';
import {
  APPROVE_LIST,
  EMPLOYEE_IRONING,
  EMPLOYEE_STRETCH,
  VARIFY_LIST,
} from '@/constants/master-data';
import withSession from '@/hoc/withSession';
import useDailyReport from '@/hook/useDailyReport.hook';
import { ChangeEventBaseType } from '@/type/event';
import { Fragment } from 'react';
import { IoSaveOutline } from 'react-icons/io5';
import { MdFormatListBulletedAdd } from 'react-icons/md';

const Report = () => {
  const {
    newLot,
    onChangeNewLot,
    report,
    onCloseModal,
    onToggleOpenModal,
    isOpenModal,
    onSubmitAddLot,
    lotsList,
    onDeleteLots,
    onChangeReport,
    onChangeReportApprove,
  } = useDailyReport();
  return (
    <Fragment>
      <div className="shadow-panel text-center">
        <div className="flex justify-center items-center min-w-[600px]">
          <p className="pr-6">รายงานการผลิตประจำวัน</p>
          <div className="w-[300px]">
            <DropDown
              value={''}
              textLabel={''}
              onChange={function (event: ChangeEventBaseType<string>): void {
                throw new Error('Function not implemented.');
              }}
              id={''}
              name={''}
              disabled={false}
            />
          </div>
        </div>
        <br />
        Production Daily Report SU
        <div className="pt-6 pb-6 mb-8 grid gap-2 border-b-2 md:grid-cols-4 xl:grid-cols-7">
          <div className="flex justify-center items-center">
            <div className="pr-4">วันที่ เดือน ปี</div>
            <DatePickerInput
              value={new Date()}
              // onChange={function (event: ChangeEventBaseType<string>): void {
              //   throw new Error('Function not implemented.');
              // }}
              id={''}
              name={''}
              disabled={false}
              onChange={function (
                event: ChangeEventBaseType<Date | null>
              ): void {
                throw new Error('Function not implemented.');
              }}
              isShowDateOnly
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">เครื่อง</div>
            <TextInput
              value={''}
              textLabel={''}
              onChange={function (event: ChangeEventBaseType<string>): void {
                throw new Error('Function not implemented.');
              }}
              id={''}
              name={''}
              character={[]}
              disabled={false}
              placeholder="ชื่อเครื่อง"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">กะ</div>
            <TextInput
              value={''}
              textLabel={''}
              onChange={function (event: ChangeEventBaseType<string>): void {
                throw new Error('Function not implemented.');
              }}
              id={''}
              name={''}
              character={[]}
              disabled={false}
              placeholder="ชื่อเครื่อง"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">หัวหน้าไลน์</div>
            <TextInput
              value={''}
              textLabel={''}
              onChange={function (event: ChangeEventBaseType<string>): void {
                throw new Error('Function not implemented.');
              }}
              id={''}
              name={''}
              character={[]}
              disabled={false}
              placeholder="ชื่อเครื่อง"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">เริ่ม</div>
            <DatePickerInput
              value={new Date()}
              // onChange={function (event: ChangeEventBaseType<string>): void {
              //   throw new Error('Function not implemented.');
              // }}
              id={''}
              name={''}
              disabled={false}
              onChange={function (
                event: ChangeEventBaseType<Date | null>
              ): void {
                throw new Error('Function not implemented.');
              }}
              isShowTimeOnly
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">ถึง</div>
            <DatePickerInput
              value={new Date()}
              // onChange={function (event: ChangeEventBaseType<string>): void {
              //   throw new Error('Function not implemented.');
              // }}
              id={''}
              name={''}
              disabled={false}
              onChange={function (
                event: ChangeEventBaseType<Date | null>
              ): void {
                throw new Error('Function not implemented.');
              }}
              isShowTimeOnly
            />
          </div>
          <div className="flex justify-end items-center">
            <Button
              id={'openModal'}
              onClick={() => onToggleOpenModal(LOT_DEFAULT, true)}
              type={'button'}
              name={'openModal'}
              className="mr-4"
            >
              <div className="flex justify-center items-center">
                <MdFormatListBulletedAdd className="text-[20px] mr-2" />
                เพิ่มล็อต
              </div>
            </Button>
            <Button
              id={'openModal'}
              onClick={() => {}}
              type={'button'}
              name={'openModal'}
              theme="light"
            >
              <div className="flex justify-center items-center">
                <IoSaveOutline className="text-[20px] mr-2" />
                บันทึก
              </div>
            </Button>
          </div>
        </div>
        <DailyReport
          data={lotsList}
          onToggleOpenModal={onToggleOpenModal}
          onDeleteLots={onDeleteLots}
        />
        <div className="flex justify-between items-center border-t-2 my-2 pt-6">
          <div className="grid gap-2 grid-cols-1">
            <div className="flex justify-center items-center">
              <div className="pr-4 w-[100px]">พนักงานรีด</div>
              <div className="w-[200px] mr-2">
                <DropDown
                  value={report.employeeIroning.employeeName}
                  onChange={onChangeReportApprove}
                  id={'employeeIroning'}
                  name={'employeeName'}
                  option={EMPLOYEE_IRONING}
                />
              </div>

              <DatePickerInput
                value={report.employeeIroning.approveDate}
                id={'employeeIroning'}
                name={'approveDate'}
                onChange={onChangeReportApprove}
                isShowDateOnly
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="pr-4 w-[100px]">ตรวจสอบ</div>
              <div className="w-[200px] mr-2">
                <DropDown
                  value={report.varify.employeeName}
                  onChange={onChangeReportApprove}
                  id={'varify'}
                  name={'employeeName'}
                  option={VARIFY_LIST}
                />
              </div>

              <DatePickerInput
                value={report.varify.approveDate}
                id={'varify'}
                name={'approveDate'}
                onChange={onChangeReportApprove}
                isShowDateOnly
              />
            </div>
          </div>
          <div className="grid gap-2 grid-cols-1">
            <div className="flex justify-center items-center">
              <div className="pr-4 w-[100px]">พนักงานยืด</div>
              <div className="w-[200px] mr-2">
                <DropDown
                  value={report.employeeStretch.employeeName}
                  onChange={onChangeReportApprove}
                  id={'employeeStretch'}
                  name={'employeeName'}
                  option={EMPLOYEE_STRETCH}
                />
              </div>

              <DatePickerInput
                value={report.employeeStretch.approveDate}
                id={'employeeStretch'}
                name={'approveDate'}
                onChange={onChangeReportApprove}
                isShowDateOnly
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="pr-4 w-[100px]">อนุมัติ</div>
              <div className="w-[200px] mr-2">
                <DropDown
                  value={report.approve.employeeName}
                  onChange={onChangeReportApprove}
                  id={'approve'}
                  name={'employeeName'}
                  option={APPROVE_LIST}
                />
              </div>

              <DatePickerInput
                value={report.approve.approveDate}
                id={'approve'}
                name={'approveDate'}
                onChange={onChangeReportApprove}
                isShowDateOnly
              />
            </div>
          </div>
        </div>
      </div>
      <LotCrmModal
        newLot={newLot}
        onChangeNewLot={onChangeNewLot}
        isOpenModal={isOpenModal}
        onCloseModal={onCloseModal}
        onSubmitAddLot={onSubmitAddLot}
      />
    </Fragment>
  );
};

export default withSession(Report, 'ListReport', 'Manual Daily Report');
