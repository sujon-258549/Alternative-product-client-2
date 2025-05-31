// components/Modal.tsx
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed mt-5 mr-2 inset-0 z-50 flex items-center justify-center bg-[#424242] bg-opacity-50">
      <div className=" text-white rounded-lg p-2 w-full max-w-[320px] max-h-[90vh]  relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
