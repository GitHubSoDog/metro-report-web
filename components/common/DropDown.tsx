import { ChangeEventBaseType, OptionPropsType } from '@/type/event';
import { ChangeEventHandler, Fragment } from 'react';

type DropDownPropsType<T, K = string> = {
  value: string;
  textLabel?: string;
  onChange: (event: ChangeEventBaseType<T, K>) => void;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  option?: OptionPropsType[];
};

const DropDown = <T extends string, K extends string>({
  textLabel,
  onChange,
  id,
  name,
  placeholder = 'เลือกข้อมูล',
  disabled = false,
  value,
  option = [],
}: DropDownPropsType<T, K>) => {
  const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value } = event.target;
    const changeEvent: ChangeEventBaseType<T, K> = {
      name: name as K,
      value: value as T,
      id: id,
    };
    onChange?.(changeEvent);
  };

  return (
    <Fragment>
      <div>
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {textLabel}
        </label>
        <select
          id={id}
          disabled={disabled}
          value={value}
          onChange={handleOnChange}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {[
            {
              value: '',
              lable: placeholder,
            },
            ...option,
          ].map((_option, index) => (
            <option key={index} value={_option.value}>
              {_option.lable}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};

export default DropDown;
