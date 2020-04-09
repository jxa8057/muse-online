import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./../";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalMessage,
  CloseButton,
  ModalFooter
} from "./ModalStyled";

const ModalContainer = props => {
  const { message, closeModal, onConfirm } = props;
  return ReactDOM.createPortal(
    <Modal>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={closeModal} />
        </ModalHeader>
        <ModalMessage>{message}</ModalMessage>
        <ModalFooter>
          <Button onClick={onConfirm}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>,
    document.body
  );
};

export default ModalContainer;
