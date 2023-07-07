import { FaPlay } from "react-icons/fa";

import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailImageContainer,
  ThumbnailOverlay,
  ThumbnailText,
} from "./styles";

interface ThumbnailProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

export const Thumbnail = ({ title, thumbnail, onClick }: ThumbnailProps) => {
  return (
    <ThumbnailContainer>
      <ThumbnailImageContainer onClick={onClick}>
        <ThumbnailImage
          src={thumbnail}
          width={362}
          height={204}
          alt={`Imagem da thumbnail do ${title}`}
        ></ThumbnailImage>
        <ThumbnailOverlay>
          <FaPlay color="white" size={60} />
        </ThumbnailOverlay>
      </ThumbnailImageContainer>

      <ThumbnailText>{title}</ThumbnailText>
    </ThumbnailContainer>
  );
};
