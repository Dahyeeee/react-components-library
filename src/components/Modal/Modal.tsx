import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import S from "./Modal.styles";

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
          <S.Backdrop onClick={closeModal} />
          <S.ModalContainer $position={$position}>{children}</S.ModalContainer>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
