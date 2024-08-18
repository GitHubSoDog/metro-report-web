import { ChangeEvent } from 'react';
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
type PaginationCustomType = {
  page: number;
  sizePage: number;
  totalData: number;
  setupPerPage?: number[];
  handlePerPage: (event: ChangeEvent<HTMLSelectElement>) => void;
  handlePage: (count: number) => void;
  firstPage: () => void;
  finalPage: () => void;
};

const PaginationCustom = ({
  sizePage,
  page,
  totalData = 0,
  handlePerPage,
  firstPage,
  handlePage,
  finalPage,
  setupPerPage = [5, 10, 15, 20, 25],
}: PaginationCustomType) => {
  return (
    <div className="px-6 py-4 flex w-full justify-end items-center text-[13px] text-[rgba(0,0,0,0.54)]">
      Rows per page:
      <select
        className="ml-3 mr-6 max-w-[40px] hover:cursor-pointer"
        value={sizePage}
        onChange={handlePerPage}
      >
        {setupPerPage.map((_list, index) => (
          <option value={_list} key={index}>
            {_list}
          </option>
        ))}
      </select>
      <span className="mr-6">
        {sizePage * (page - 1) + 1}-
        {totalData < sizePage * page ? totalData : sizePage * page} of{' '}
        {totalData}
      </span>
      <button
        onClick={firstPage}
        disabled={page === 1}
        className="disabled:cursor-not-allowed hover:opacity-15"
      >
        <BsChevronBarLeft className="mr-4 text-[18px]" />
      </button>
      <button
        onClick={() => handlePage(-1)}
        disabled={page === 1}
        className="disabled:cursor-not-allowed hover:opacity-15"
      >
        <BsChevronLeft className="mr-4 text-[16px]" />
      </button>
      <button
        onClick={() => handlePage(1)}
        disabled={page === Math.ceil(totalData / sizePage)}
        className="disabled:cursor-not-allowed hover:opacity-15"
      >
        <BsChevronRight className="mr-4 text-[16px]" />
      </button>
      <button
        onClick={finalPage}
        disabled={page === Math.ceil(totalData / sizePage)}
        className="disabled:cursor-not-allowed hover:opacity-15"
      >
        <BsChevronBarRight className="text-[18px]" />
      </button>
    </div>
  );
};

export default PaginationCustom;
