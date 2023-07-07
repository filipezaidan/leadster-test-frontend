import {
  CloseButton,
  CloseContainer,
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  Divider,
  DownaloadsButtonsContainer,
  DownloadsContainer,
  LineHeader,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalHeaderText,
  ModalHeaderTitle,
  ModalOverlay,
  VideoYoutube,
} from "./styles";
import { DownloadButton } from "../DownloadButton";
import { VideoType } from "@/app/mock/Videos";

interface ModalProps {
  video: VideoType | null;
  onOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ video, onClose, onOpen }: ModalProps) => {
  if (!onOpen) return;

  return (
    <ModalOverlay>
      <ModalContainer>
        <LineHeader />
        <CloseContainer onClick={onClose}>
          <CloseButton size={20} color="#718493" />
        </CloseContainer>
        <ModalHeader>
          <ModalHeaderTitle>
            Webinar: <ModalHeaderText>{video?.title}</ModalHeaderText>
          </ModalHeaderTitle>
        </ModalHeader>

        <ModalBody>
          <VideoYoutube
            src={video?.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </ModalBody>
        <ModalFooter>
          <DescriptionContainer>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <Divider />
            <DescriptionText>{video?.description}</DescriptionText>
          </DescriptionContainer>
          <DownloadsContainer>
            <DescriptionTitle>Downloads</DescriptionTitle>
            <Divider />
            <DownaloadsButtonsContainer>
              <DownloadButton type="xls" />
              <DownloadButton type="doc" />
              <DownloadButton type="ppt" />
            </DownaloadsButtonsContainer>
          </DownloadsContainer>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
