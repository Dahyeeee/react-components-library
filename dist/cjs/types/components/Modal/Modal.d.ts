import React, { PropsWithChildren } from "react";
interface ModalProps {
    isModalVisible: boolean;
    closeModal?: () => void;
    $position?: "top" | "middle" | "bottom";
    $backgroundColor?: string;
}
declare const Modal: ({ children, isModalVisible, closeModal, $position, $backgroundColor, }: PropsWithChildren<ModalProps>) => React.ReactPortal;
export default Modal;
