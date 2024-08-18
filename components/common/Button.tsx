import { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonPropsType = PropsWithChildren<{
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  theme?: 'danger' | 'primary' | 'success';
  name: string;
}>;
const Button = ({
  children,
  id,
  onClick,
  disabled = false,
  type,
  name,
  theme = 'primary',
}: ButtonPropsType) => {
  const themeColor: Record<'danger' | 'primary' | 'success', string> = {
    primary:
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    danger:
      'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    success:
      'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  };
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      type={type}
      name={name}
      className={themeColor[theme]}
    >
      {children}
    </button>
  );
};

export default Button;
