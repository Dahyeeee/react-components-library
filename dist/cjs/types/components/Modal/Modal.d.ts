import React, { PropsWithChildren } from "react";
import "./Modal.css";
interface ModalProps {
    isModalVisible: boolean;
    closeModal?: () => void;
    $position?: "top" | "middle" | "bottom";
}
declare const Modal: ({ children, isModalVisible, closeModal, $position, }: PropsWithChildren<ModalProps>) => React.ReactPortal;
export default Modal;
