import { ThumbnailContainer, ThumbnailImage, ThumbnailText } from "./styles";

interface IThumbnail {
  title: string;
  src: string;
}

export const Thumbnail = ({ title, src }: IThumbnail) => {
  return (
    <ThumbnailContainer>
      <ThumbnailImage
        src={src}
        width={362}
        height={204}
        style={{ objectFit: "contain" }}
        alt="Imagem da thumbnail do video"
      />
      <ThumbnailText>{title}</ThumbnailText>
    </ThumbnailContainer>
  );
};
