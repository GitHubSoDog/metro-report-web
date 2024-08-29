import { MouseEvent, PropsWithChildren, ReactNode } from 'react';
import Button from './Button';

type ModalPropsType = PropsWithChildren<{
  title: string;
  isOpen: boolean;
  textOk?: string;
  textClose?: string;
  onClose: () => void;
  onSubmit: () => void;
  //   element?: ReactNode;
}>;
const Modal = ({
  title = 'Hello',
  isOpen = true,
  textOk = 'บันทึก',
  textClose = 'ปิด',
  onClose,
  onSubmit,
  children,
}: ModalPropsType) => {
  return (
    <div className="modal-middle">
      <div className="modal-content-middle">
        <div className="flex items-center justify-between pb-4 px-4 border-b rounded-t ">
          <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
          <button
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            data-modal-hide="default-modal"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="modal-body text-start">{children}</div>
        <div className="modal-footer">
          <Button
            id={'textClose'}
            onClick={onClose}
            type={'button'}
            name={'textClose'}
            theme="light"
            className="w-[180px] mr-2"
          >
            {textClose}
          </Button>
          <Button
            onClick={onSubmit}
            type={'button'}
            name={'textSuccess'}
            id={'textSuccess'}
            className="w-[180px]"
          >
            {textOk}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
