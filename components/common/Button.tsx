import { MouseEventHandler, PropsWithChildren } from 'react';

type ThemeBtnType = 'danger' | 'primary' | 'success' | 'light';
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
      'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
    primary:
      'text-white bg-[var(--bg-primary)] hover:opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    danger:
      'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    success:
      'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
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
