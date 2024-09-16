import { ChangeEventBaseType } from '@/type/event';
import { format } from 'date-fns';
import { ChangeEventHandler } from 'react';

type TimePickerInputPropsType<K = string> = {
  value: Date | null;
  textLabel?: string;
  onChange: (event: ChangeEventBaseType<Date, K>) => void;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
};

const TimePickerInput = <K extends string>({
  textLabel = '',
  onChange,
  id = '',
  name = '',
  placeholder = 'กรอกข้อมูล',
  disabled = false,
  value = null, // Provide default empty string for controlled input
}: TimePickerInputPropsType<K>) => {
  const formattedValue = value ? format(value, 'HH:mm') : '';

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name: inputName, value: inputValue } = event.target;

    const [hours, minutes] = inputValue.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));

    const changeEvent: ChangeEventBaseType<Date, K> = {
      name: inputName as K,
      value: date,
      id: id,
    };

    onChange?.(changeEvent);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {textLabel}
      </label>
      <div>
        <input
          type="time"
          id={id}
          onChange={handleOnChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          name={name}
          value={formattedValue} // Ensure value is always controlled
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TimePickerInput;
