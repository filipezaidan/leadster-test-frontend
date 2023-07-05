import styled from "styled-components";
import Image from "next/image";

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 36px 5px rgba(12, 0, 46, 0.04);
  width: 362px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ThumbnailImage = styled(Image)`
  object-fit: contain;
`;

export const ThumbnailText = styled.div`
  display: flex;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
`;
