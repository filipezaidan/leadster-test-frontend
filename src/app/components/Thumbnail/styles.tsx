import styled from "styled-components";
import Image from "next/image";

export const ThumbnailContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 0 36px 5px rgba(12, 0, 46, 0.04);
  width: 362px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ThumbnailOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  opacity: 0;

  svg {
    visibility: hidden;
  }

  &:hover {
    display: flex;
    opacity: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(60, 155, 227, 0.5);
  }

  &:hover * {
    visibility: visible;
  }
`;

export const ThumbnailImageContainer = styled.div`
  position: relative;
  display: flex;
  width: auto;
  height: auto;
  cursor: pointer;
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
