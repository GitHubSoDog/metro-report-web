import { ChangeEventBaseType } from '@/type/event';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerPropsType<T, K = string> = {
  value: Date;
  textLabel?: string;
  onChange: (event: ChangeEventBaseType<T, K>) => void;
  id: string;
  name: string;
  disabled?: boolean;
  isShowTimeOnly?: boolean;
  isShowDateOnly?: boolean;
};

const DatePickerInput = <T extends Date, K extends string>({
  textLabel = '',
  onChange,
  id,
  name,
  disabled = false,
  value = new Date(),
  isShowTimeOnly = false,
  isShowDateOnly = false,
}: DatePickerPropsType<T | null, K>) => {
  const handleOnChange = (event: Date | null) => {
    const changeEvent: ChangeEventBaseType<T, K> = {
      name: name as K,
      value: (event || null) as T,
      id: id,
    };
    onChange?.(changeEvent);
  };
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {textLabel}
      </label>
      <DatePicker
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={id}
        selected={value}
        onChange={handleOnChange}
        timeInputLabel="Time:"
        dateFormat={
          isShowTimeOnly || isShowDateOnly
            ? isShowDateOnly
              ? 'dd/MM/yyyy'
              : isShowTimeOnly
              ? 'HH:mm'
              : 'dd/MM/yyyy HH:mm'
            : 'dd/MM/yyyy HH:mm'
        }
        showTimeInput={isShowDateOnly ? false : true}
        showTimeSelectOnly={isShowTimeOnly}
        disabled={disabled}
        name={name}
        disabledKeyboardNavigation
      />
    </div>
  );
};

export default DatePickerInput;
