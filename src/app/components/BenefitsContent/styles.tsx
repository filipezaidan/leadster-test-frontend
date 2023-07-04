import styled from "styled-components";
import { StyleRegistry } from "styled-jsx";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 740px;
  background-color: #f0f8ff;
`;

export const LeftContent = styled.div`
  display: flex;
  position: relative;
  /* flex-direction: column; */
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: flex-start;
`;

{
  /* TODO: adjust background element */
}
export const BackgroundElement = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 80%;
  z-index: 1;
  clip-path: polygon(0% -20%, 100% 100%, 0% 100%);
  border-radius: 10% 10% 0% 0%;
  background-color: #e6f3ff;
`;

export const Title = styled.span`
  font-size: 3.2rem;
  color: #1c3c50;
`;

export const Subtitle = styled.span`
  font-size: 1.6rem;
  color: #1c3c50;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #1c3c50;
`;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
`;

export const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 25px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 28px;
  background-color: #0083ff;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 28px 36px;
  border: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #01c8fc;
  }
`;

interface DivFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number;
}

export const DivFlex = styled.div<DivFlexProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap ?? null};
`;
