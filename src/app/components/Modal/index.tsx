import {
  LineHeader,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./styles";
export const Modal = () => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <LineHeader />
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
