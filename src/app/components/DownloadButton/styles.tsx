import { styled } from "styled-components";

export const DownloadButtonContainer = styled.div<{ bg: string }>`
  display: flex;
  position: relative;
  width: auto;
  min-width: 124px;
  height: 36px;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.bg};
  border-radius: 8px;
  cursor: pointer;
`;

export const DownloadButtonIcon = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  background-color: ${(props) => props.bg};
  height: 100%;
`;

export const DownloadButtonContent = styled.div`
  display: flex;
  padding: 4px;
`;

export const DownloadButtonTitle = styled.span<{ color: string }>`
  font-size: 0.8rem;
  color: ${(props) => props.color};
`;
