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

export const Modal = () => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <LineHeader />
        <CloseContainer onClick={() => alert("fechar modal")}>
          <CloseButton size={20} color="#718493" />
        </CloseContainer>
        <ModalHeader>
          <ModalHeaderTitle>
            Webinar:{" "}
            <ModalHeaderText>
              Como aumentar sua Geração de Leads feat. Traktor
            </ModalHeaderText>
          </ModalHeaderTitle>
        </ModalHeader>

        <ModalBody>
          <VideoYoutube
            src="https://www.youtube.com/embed/ouCGdcnxeu8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </ModalBody>
        <ModalFooter>
          <DescriptionContainer>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <Divider />
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipng elit.Morbi cursus
              massa. Lorem ipsum dolor sit amet, consectetur adipng elit.Morbi
              cursus massa. Lorem ipsum dolor sit amet
            </DescriptionText>
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
