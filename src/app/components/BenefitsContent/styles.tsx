import Image from "next/image";
import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  height: auto;
  padding: 4% 0%;
  background-color: #f0f8ff;
  gap: 5%;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 0%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 2;
  padding: 2%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 30px;

  @media (min-width: 1200px) {
    align-items: flex-start;
    width: 100%;
    gap: 10px;
  }
`;

export const LeftContentImage = styled(Image)`
  max-width: 100%;
  height: auto;
  z-index: 2;
`;

export const LeftContentElement = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 10% 20% -40% -20%;
  transform: rotate(-43deg);
  border-radius: 2rem;
  background-color: #e6f3ff;
`;

export const RightContentTitle = styled.span`
  display: block;
  font-size: 2.4rem;
  color: #1c3c50;
  max-width: 100%;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    max-width: 75%;
  }
  @media (min-width: 992px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1200px) {
    max-width: 75%;
    font-size: 2.2rem;
  }

  @media (min-width: 1583px) and (max-width: 1980px) {
    max-width: 60%;
    font-size: 2.2rem;
  }
`;

export const RightContentSubtitle = styled.span`
  font-size: 1.1rem;
  color: #1c3c50;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: #1c3c50;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;
export const RightContentDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
`;

export const RightContentButton = styled(Button)`
  min-height: 60px;
  font-size: 0.9rem;
  padding: 4px 32px;
`;

export const RightContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RightContentElement = styled.div<{ gap?: number }>`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-wrap: wrap;
    width: auto;
    gap: ${(props) => `${props.gap}px` ?? 0};
  }
`;
