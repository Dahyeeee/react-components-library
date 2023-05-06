import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
  isModalVisible: boolean;
  closeModal?: () => void;
  $position?: "top" | "middle" | "bottom";
}

const Modal = ({
  children,
  isModalVisible,
  closeModal,
  $position = "bottom",
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <>
      {isModalVisible && (
        <>
          <div className="backdrop" onClick={closeModal} />
          <div className={`modal-container ${$position}`}>{children}</div>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
