import Button from '@/components/common/Button';
import DatePickerInput from '@/components/common/DatePickerInput';
import DropDown from '@/components/common/DropDown';
import Loading from '@/components/common/Loading';
import TextInput from '@/components/common/TextInput';
import TimePickerInput from '@/components/common/TimePickerInput';
import LotCrmModal from '@/components/feature/add-lot/LotCrmModal';
import LotsTable from '@/components/feature/lots-table/LotsTable';
import DailyReportPrint from '@/components/feature/print-form/DailyReportPrint';
import { LOT_DEFAULT } from '@/constants/lot';
import {
  APPROVE_LIST,
  EMPLOYEE_IRONING,
  EMPLOYEE_STRETCH,
  VARIFY_LIST,
} from '@/constants/master-data';
import withSession from '@/hoc/withSession';
import useDailyReport from '@/hook/useDailyReport.hook';
import usePrintExport from '@/hook/usePrintExport.hook';
import { ProtectedPageType } from '@/type/event';
import { showLocalDateTimeFormatWeb } from '@/utilities/normal-fn';
import { Fragment } from 'react';
import { FiDownloadCloud } from 'react-icons/fi';
import { IoBackspaceOutline, IoSaveOutline } from 'react-icons/io5';
import { MdAdd, MdDownload, MdReportGmailerrorred } from 'react-icons/md';
import { TfiPrinter } from 'react-icons/tfi';

const Report = ({
  skinTypeMapping,
  employeeIroningMapping,
  varifyListMapping,
  employeeStretchMapping,
  approveListMapping,
  billetTypeMapping,
}: ProtectedPageType) => {
  const {
    newLot,
    onChangeNewLot,
    report,
    onCloseModal,
    onToggleOpenModal,
    isOpenModal,
    onSubmitAddLot,
    lotsList,
    onChangeReport,
    onChangeReportApprove,
    onBackPageList,
    onSubmitReport,
    isLoading,
    removeCheck,
    onRequestLotsIoT,
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
    lotsListPrint,
  } = useDailyReport();
  const { printRef, onClickPrint, totalPagePrint, isPrintLoading } =
    usePrintExport({
      nameReport: showLocalDateTimeFormatWeb(new Date()),
    });

  if (isLoading) return <Loading />;

  return (
    <Fragment>
      {isPrintLoading ? <Loading /> : null}
      <div className="shadow-panel text-center relative">
        <Button
          id={'submit_report'}
          onClick={onSubmitReport}
          type={'button'}
          name={'submit_report'}
          className="absolute top-8 right-8"
          theme="success"
        >
          <div className="flex justify-center items-center">
            <IoSaveOutline className="text-[20px] mr-2" />
            บันทึก
          </div>
        </Button>
        {lotsListPrint?.length > 0 ? (
          <Button
            id={'export'}
            onClick={() => onClickPrint(report)}
            type={'button'}
            name={'export'}
            className="absolute top-8 right-[9rem]"
            theme="light"
          >
            <div className="flex justify-center items-center">
              <TfiPrinter className="text-[18px] mr-2" />
              Print PDF
            </div>
          </Button>
        ) : (
          <span className="absolute top-8 left-0 badge-extra py-3">
            Not Ready
          </span>
        )}

        <div className="flex justify-center items-center min-w-[600px]">
          <p className="pr-6">รายงานการผลิตประจำวัน</p>
          <div className="w-[300px]">
            <DropDown
              value={report.department}
              onChange={onChangeReport}
              id={'department'}
              name={'department'}
              option={[
                {
                  value: 'ฝ่ายผลิตโรงรีด',
                  lable: 'ฝ่ายผลิตโรงรีด',
                },
              ]}
              disabled
            />
          </div>
        </div>
        <br />
        <div className="flex justify-center items-center">
          <p className="mr-4">Production Daily Report SU</p>
          <TextInput
            value={report.su}
            onChange={onChangeReport}
            id={'su'}
            name={'su'}
            maxLength={11}
          />
        </div>

        <div className="pt-6 pb-6 mb-4 grid gap-2 border-b-2 md:grid-cols-4 xl:grid-cols-6">
          <div className="flex justify-center items-center">
            <div className="pr-4 min-w-[100px]">วันที่ เดือน ปี</div>
            <DatePickerInput
              value={report.dateReport}
              onChange={onChangeReport}
              id={'dateReport'}
              name={'dateReport'}
              isShowDateOnly
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">เครื่อง</div>
            <div className="w-full">
              <DropDown
                value={report.machine}
                onChange={onChangeReport}
                id={'machine'}
                name={'machine'}
                placeholder="ชื่อเครื่อง"
                option={[
                  {
                    value: 'metroiot02',
                    lable: 'metroiot02',
                  },
                ]}
                disabled
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">กะ</div>
            <TextInput
              value={report.duty}
              onChange={onChangeReport}
              id={'duty'}
              name={'duty'}
              maxLength={10}
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4 min-w-[100px]">หัวหน้าไลน์</div>
            <TextInput
              value={report.lineLeader}
              onChange={onChangeReport}
              id={'lineLeader'}
              name={'lineLeader'}
              maxLength={20}
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">เริ่ม</div>
            <TimePickerInput
              value={report.start}
              onChange={onChangeReport}
              id={'start'}
              name={'start'}
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-4">ถึง</div>
            <TimePickerInput
              value={report.end}
              onChange={onChangeReport}
              id={'end'}
              name={'end'}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-4 pl-4">
          <div className="font-extrabold">รายการล็อต</div>
          <div>
            {lotsList.length > 0 ? (
              <Fragment>
                <Button
                  id={'onRequestLotsIoT'}
                  onClick={onRequestLotsIoT}
                  type={'button'}
                  name={'openModal'}
                  className="mr-4"
                  theme="info"
                >
                  <div className="flex justify-center items-center">
                    <FiDownloadCloud className="text-[20px] mr-2" />
                    ข้อมูลจากระบบ
                  </div>
                </Button>
                <Button
                  id={'addLots'}
                  onClick={() => onToggleOpenModal(LOT_DEFAULT, true)}
                  type={'button'}
                  name={'openModal'}
                  className="mr-4"
                >
                  <div className="flex justify-center items-center">
                    <MdAdd className="text-[20px] mr-2" />
                    เพิ่มล็อต
                  </div>
                </Button>
              </Fragment>
            ) : null}
          </div>
        </div>
        {lotsList.length > 0 ? (
          <LotsTable
            data={lotsList}
            onToggleOpenModal={onToggleOpenModal}
            removeCheck={removeCheck}
            page={page}
            sizePage={sizePage}
            handlePerPage={handlePerPage}
            handlePage={handlePage}
            firstPage={firstPage}
            finalPage={finalPage}
            scrollRef={scrollRef}
            handleMouseMove={handleMouseMove}
            handleMouseUp={handleMouseUp}
            handleMouseLeave={handleMouseLeave}
            handleMouseDown={handleMouseDown}
            total={total}
            skinTypeMapping={skinTypeMapping}
            billetTypeMapping={billetTypeMapping}
          />
        ) : (
          <div className="flex flex-col justify-center items-center mb-4 border border-red-600 pt-4">
            <div>
              <MdReportGmailerrorred className="text-red-500 text-5xl mb-4" />
            </div>
            <div className="text-red-500 font-extrabold mb-4">
              - ยังไม่มีรายการล็อตเข้ามาในระบบ กรุณากดเพิ่มล็อต หรือ
              กดข้อมูลจากระบบ -
            </div>
            <div className="flex mb-4">
              <Button
                id={'onToggleOpenModal'}
                onClick={() => onToggleOpenModal(LOT_DEFAULT, true)}
                type={'button'}
                name={'openModal'}
                className="mr-2"
              >
                <div className="flex justify-center items-center">
                  <MdAdd className="text-[20px] mr-2" />
                  เพิ่มล็อต
                </div>
              </Button>
              <Button
                id={'openModal'}
                onClick={onRequestLotsIoT}
                type={'button'}
                name={'openModal'}
                theme="info"
              >
                <div className="flex justify-center items-center">
                  <FiDownloadCloud className="text-[20px] mr-2" />
                  ข้อมูลจากระบบ
                </div>
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center border-y-2 pt-6 py-6 mb-6">
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
        <div className="flex justify-end items-center">
          <Button
            id={'back_page'}
            onClick={onBackPageList}
            type={'button'}
            name={'back_page'}
            theme="light"
            className="mr-2"
          >
            <div className="flex justify-center items-center">
              <IoBackspaceOutline className="text-[20px] mr-2" />
              กลับ
            </div>
          </Button>
          <Button
            id={'submit_report'}
            onClick={onSubmitReport}
            type={'button'}
            name={'submit_report'}
            theme="success"
          >
            <div className="flex justify-center items-center">
              <IoSaveOutline className="text-[20px] mr-2" />
              บันทึก
            </div>
          </Button>
        </div>
      </div>

      <LotCrmModal
        newLot={newLot}
        onChangeNewLot={onChangeNewLot}
        isOpenModal={isOpenModal}
        onCloseModal={onCloseModal}
        onSubmitAddLot={onSubmitAddLot}
      />
      <DailyReportPrint
        master={{
          skinTypeMapping,
          employeeIroningMapping,
          varifyListMapping,
          employeeStretchMapping,
          approveListMapping,
          billetTypeMapping,
        }}
        report={report}
        lots={lotsListPrint}
        pageTotal={totalPagePrint}
        ref={printRef}
      />
    </Fragment>
  );
};

export default withSession(Report, 'ListReport', 'Manual Daily Report');
