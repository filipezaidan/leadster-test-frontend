import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: #f0f8ff;

  @media (min-width: 576px) {
    height: 600px;
  }
`;

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  @media (min-width: 410px) {
    width: 82%;
  }
  @media (min-width: 576px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 65%;
  }

  @media (min-width: 992px) {
    width: 63%;
  }

  @media (min-width: 1200px) {
    width: 62%;
  }

  @media (min-width: 1400px) {
    width: 55%;
  }
`;

export const HeroTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0077f4;
  background-color: transparent;
  padding: 4px 8px;
  white-space: nowrap;
  min-width: 20%;

  width: auto;
  border-radius: 24px 24px 24px 4px;
`;

export const HeroTagTitle = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: #0077f4;

  @media (min-width: 576px) {
    font-size: 0.75rem;
  }

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

export const HeroContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  white-space: nowrap;
`;

export const HeroTitle = styled.span`
  font-size: 2.3rem;
  font-weight: 700;
  height: auto;
  font-style: normal;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(-45deg, #2c83fb, #1f76f0);

  @media (min-width: 576px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    font-size: 4.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 5.2rem;
  }
`;

export const HeroTitleBackground = styled.span`
  background-image: url("/asset-header.png");
  background-position: right -1% bottom 82%;
  background-repeat: no-repeat;
  background-size: 6%;
`;

export const HeroSubtitle = styled.span`
  color: #1c3c50;
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.4rem;
  }
`;

export const HeroDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
  margin: 10px 0;
  white-space: nowrap;
`;

export const HeroDescription = styled.p`
  font-size: 0.8rem;
  color: #1c3c50;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }
`;
