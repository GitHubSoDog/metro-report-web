import { MouseEventHandler, PropsWithChildren } from 'react';

type ThemeBtnType = 'danger' | 'primary' | 'success' | 'light' | 'info';
type ButtonPropsType = PropsWithChildren<{
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  theme?: ThemeBtnType;
  name: string;
  className?: string;
}>;
const Button = ({
  children,
  id,
  onClick,
  disabled = false,
  type,
  name,
  theme = 'primary',
  className = '',
}: ButtonPropsType) => {
  const themeColor: Record<ThemeBtnType, string> = {
    light:
      'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5',
    primary:
      'text-white bg-[var(--bg-primary)] hover:opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5',
    danger:
      'focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5',
    success:
      'focus:outline-none text-black bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5',
    info: 'text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5',
  };
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      type={type}
      name={name}
      className={`${themeColor[theme]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
