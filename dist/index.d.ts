import React, { PropsWithChildren } from 'react';

interface ModalProps {
    isModalVisible: boolean;
    closeModal?: () => void;
    $position?: "top" | "middle" | "bottom";
}
declare const Modal: ({ children, isModalVisible, closeModal, $position, }: PropsWithChildren<ModalProps>) => React.ReactPortal;

export { Modal };
