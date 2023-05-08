import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import S from "./Modal.styles";

interface ModalProps {
  isModalVisible: boolean;
  closeModal?: () => void;
  $position?: "top" | "middle" | "bottom";
  $backgroundColor?: string;
}

const Modal = ({
  children,
  isModalVisible,
  closeModal,
  $position = "bottom",
  $backgroundColor = "white",
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <>
      {isModalVisible && (
        <>
          <S.Backdrop onClick={closeModal} />
          <S.ModalContainer
            $backgroundColor={$backgroundColor}
            $position={$position}
          >
            {children}
          </S.ModalContainer>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
