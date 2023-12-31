import styled, { css } from "styled-components";
import { Button } from "../Button";

export const VideosContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 25px;
  padding: 5% 10%;
`;

export const VideosContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeaderLeftContent = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  width: 100%;

  @media (min-width: 1200px) {
    overflow-x: visible;
  }
`;

export const HeaderRightContent = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

export const ButtonCategory = styled(Button)<{ isSelected: boolean }>`
  background-color: white;
  color: #1d3d51;
  border: 1px solid #1d3d51;
  transition: 0.1s;

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid #007eff;
      background-color: #007eff;
      color: white;
      font-weight: 600;
    `};
`;

export const ButtonCategoryContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SelectTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 8px;
`;

export const Body = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 20px 0px;
  place-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ButtonPage = styled.button<{ isSelected: boolean }>`
  font-size: 1.2em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  height: auto;
  background-color: transparent;
  padding: 6px 12px;

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid #007eff;
      color: #007eff;
      font-weight: 600;
      font-size: 1.3em;
    `};
`;
