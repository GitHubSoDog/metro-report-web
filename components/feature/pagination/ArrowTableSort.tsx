import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
type ArrowTableConditionType = {
  typeSort: 'ASC' | 'DESC' | '' | undefined;
};
const ArrowTableSort = ({ typeSort }: ArrowTableConditionType) =>
  typeSort === 'ASC' ? (
    <MdArrowDropUp className="ml-2 text-[18px]" />
  ) : typeSort === 'DESC' ? (
    <MdArrowDropDown className="ml-2 text-[18px]" />
  ) : null;

export default ArrowTableSort;
