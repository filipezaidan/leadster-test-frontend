import { styled } from "styled-components";
import { MdClose as CloseIcon } from "react-icons/md";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0% 5%;
  background-color: rgba(29, 61, 81, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 425px) {
    padding: 0% 10%;
  }
  @media (min-width: 576px) {
    padding: 0% 15%;
  }
  @media (min-width: 768px) {
    padding: 0% 25%;
  }
  @media (min-width: 992px) {
    padding: 0% 28%;
  }
  @media (min-width: 1400px) {
    padding: 0% 35%;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  border-radius: 1rem;
  position: relative;
  min-width: 300px;
  width: 100%;
  height: auto;
  background-color: white;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0% 5% 5% 5%;

  @media (min-width: 992px) {
    padding: 0% 8% 5% 8%;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 4px 8px;
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

export const ModalHeaderTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: #007eff;
`;

export const ModalHeaderText = styled.span`
  color: #1c3c50;
`;

export const ModalLineHeader = styled.div`
  display: flex;
  width: 100%;
  height: 4px;
  background-color: #007eff;
`;

export const ModalTitle = styled.span`
  font-size: 1.2rem;
`;

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const ModalVideoYoutube = styled.iframe`
  display: flex;
  border: none;
  width: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 4%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const DescriptionTitle = styled.span`
  font-size: 1rem;
  color: #1c3c50;
  font-weight: 600;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  color: #1c3c50;
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  border: 1px solid #eaecee;
`;

export const DownloadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const DownaloadsButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;
