import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Transparência do overlay */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: relative;
  width: 30%;
  height: 70%;
  background-color: white;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 35%;
`;

export const LineHeader = styled.div`
  display: flex;
  width: 100%;
  height: 6px;

  background-color: #007eff;
`;

export const ModalTitle = styled.span`
  font-size: 1.2rem;
`;

export const ModalBody = styled.div``;

export const ModalFooter = styled.div``;
