import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: #f0f8ff;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0077f4;
  background-color: transparent;
  padding: 8px 16px;
  min-width: 208px;
  width: auto;
  border-radius: 24px 24px 24px 4px;
`;

export const TagTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #0077f4;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.span`
  font-size: 5.2rem;
  font-weight: 700;
  font-style: normal;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #0084ff, #0077f4);
`;

export const Subtitle = styled.span`
  color: #1c3c50;
  font-size: 3.8rem;
  font-weight: 500;
`;

export const ImageTitle = styled.div`
  position: absolute;
  top: 15px;
  right: -18px;
  width: 49px;
  height: 32px;
`;

export const Description = styled.span`
  color: #ff4a58;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
  margin: 10px 0;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #1c3c50;
`;
