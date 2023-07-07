import { styled } from "styled-components";
import { MdClose as CloseIcon } from "react-icons/md";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 61, 81, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: relative;
  min-height: 480px;
  min-width: 300px;
  width: 32%;
  height: 72%;
  background-color: white;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0% 0% 5% 15%;
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

export const LineHeader = styled.div`
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

export const VideoYoutube = styled.iframe`
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
`;
