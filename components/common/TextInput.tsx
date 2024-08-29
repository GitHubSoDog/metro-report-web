import { ChangeEventBaseType } from '@/type/event';
import { ChangeEventHandler, useMemo } from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
type CharacterType =
  | 'email'
  | 'number'
  | 'phone'
  | 'thai'
  | 'eng'
  | 'special'
  | 'spaceBar'
  | 'dash'
  | 'comma'
  | 'dot';

type TextInputPropsType<T, K = string> = {
  value: string;
  textLabel?: string;
  onChange: (event: ChangeEventBaseType<T, K>) => void;
  id: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  character?: CharacterType[];
  disabled?: boolean;
  isShowIcon?: boolean;
};
const TextInput = <T extends string, K extends string>({
  textLabel = '',
  onChange,
  id = '',
  name = '',
  placeholder = 'กรอกข้อมูล',
  maxLength = 50,
  character = [],
  disabled = false,
  isShowIcon = false,
  value,
}: TextInputPropsType<T, K>) => {
  const characterRegex = useMemo(
    () =>
      character?.map((item) => {
        if (item === 'email') return 'A-Z0-9a-z+@._-';
        if (item === 'number') return '0-9';
        if (item === 'phone') return '0-9#+';
        if (item === 'thai') return '\u0E00-\u0E7F';
        if (item === 'eng') return 'A-Za-z';
        if (item === 'special') return '!@#$%^&*()_+-/';
        if (item === 'spaceBar') return ' ';
        if (item === 'dash') return '-';
        if (item === 'comma') return ',';
        if (item === 'dot') return '.';
        return '';
      }),
    [character]
  );

  const isCheckCharacter = useMemo(() => {
    if (character?.length) {
      return new RegExp(`[^${characterRegex.join('')}]`, '');
    }
    return null;
  }, [characterRegex, character]);

  const isCheckCharacterRe = useMemo(() => {
    if (character?.length) {
      return new RegExp(`[^${characterRegex.join('')}]`, 'gi');
    }

    return null;
  }, [characterRegex, character]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    const changeEvent: ChangeEventBaseType<T, K> = {
      name: name as K,
      value: (isCheckCharacterRe
        ? value
            ?.replace(isCheckCharacterRe, '')
            ?.slice(0, maxLength)
            ?.trimStart()
        : value?.slice(0, maxLength)?.trimStart()) as T,
      id: id,
    };
    onChange?.(changeEvent);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {textLabel}
      </label>
      <div className="relative">
        {isShowIcon ? (
          <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
            <TbTemperatureCelsius className="w-4 h-4 text-gray-500 " />
          </div>
        ) : null}
        <input
          type="text"
          id={id}
          onChange={handleOnChange}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${
            isShowIcon ? 'pe-10' : ''
          } p-2.5 `}
          placeholder={placeholder}
          name={name}
          maxLength={50}
          value={
            isCheckCharacterRe
              ? value
                  ?.replace(isCheckCharacterRe, '')
                  ?.slice(0, maxLength)
                  ?.trimStart()
              : value?.slice(0, maxLength)?.trimStart()
          }
          disabled={disabled}
          onKeyUp={(event) => {
            if (isCheckCharacter && isCheckCharacter.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
      </div>
    </div>
  );
};

export default TextInput;
