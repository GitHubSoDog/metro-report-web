import { ChangeEventBaseType } from '@/type/event';
import { format } from 'date-fns';
import { useState } from 'react';
import { TbClock } from 'react-icons/tb';

type TimePickerInputPropsType<K = string> = {
  value: Date | null;
  textLabel?: string;
  onChange: (event: ChangeEventBaseType<Date | null, K>) => void;
  id: string;
  name: string;
};

const TimePickerInput = <K extends string>({
  textLabel = '',
  onChange,
  id = '',
  name = '',
  value = null, // Provide default empty string for controlled input
}: TimePickerInputPropsType<K>) => {
  const formattedHours = value ? format(value, 'HH') : '';
  const formattedMinutes = value ? format(value, 'mm') : '';

  const [hours, setHours] = useState<string>(formattedHours);
  const [minutes, setMinutes] = useState<string>(formattedMinutes);

  const handleOnChange = (hours: string, minutes: string) => {
    const date = new Date();
    date.setHours(
      parseInt(hours.padStart(2, '0')),
      parseInt(minutes.padStart(2, '0'))
    );

    if (isNaN(date.getTime())) {
      const changeEvent: ChangeEventBaseType<Date | null, K> = {
        name: name as K,
        value: null,
        id: id,
      };
      onChange?.(changeEvent);
    } else {
      const changeEvent: ChangeEventBaseType<Date, K> = {
        name: name as K,
        value: date,
        id: id,
      };
      onChange?.(changeEvent);
    }
  };

  const handleHourSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHours(e.target.value);
    handleOnChange(e.target.value, minutes);
  };

  const handleMinuteSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinutes(e.target.value);
    handleOnChange(hours, e.target.value);
  };

  return (
    <div className="w-full text-start">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {textLabel}
      </label>
      <div className="flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full">
        <select
          value={formattedHours}
          onChange={handleHourSelect}
          className="w-full px-1 py-2.5 bg-blue-100 border-none rounded-lg"
        >
          <option key={'empty'} value={''}>
            {''}
          </option>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i.toString().padStart(2, '0')}>
              {i.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
        <span className="mx-2">:</span>
        <select
          value={formattedMinutes}
          onChange={handleMinuteSelect}
          className="w-full px-1 py-2.5 bg-blue-100 border-none rounded-lg"
        >
          <option key={'empty'} value={''}>
            {''}
          </option>
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i.toString().padStart(2, '0')}>
              {i.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
        <div className="flex items-center ps-1 pe-1 pointer-events-none">
          <TbClock className="w-4 h-4 text-gray-500 " />
        </div>
      </div>
    </div>
  );
};

export default TimePickerInput;
