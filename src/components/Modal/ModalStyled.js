import styled from "styled-components";

const Modal = styled.aside.attrs({
  "aria-modal": true,
  role: "dialog",
  tabindex: -1
})`
  display: flex;
  z-index: 1000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  position: relative;
  border-radius: 3px;
  padding: 1rem;
  background-color: white;
`;

const ModalMessage = styled.div`
  padding: 10px 0;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 15px;
`;

const CloseButton = styled.button.attrs({
  "aria-label": "Close Modal"
})`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${props => props.theme.secondary};
  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

const ModalFooter = styled.div`
  width: 100%;
`;

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalMessage,
  CloseButton,
  ModalFooter
};
