import Link from "next/link";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: auto;
  padding: 2rem 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 578px) {
    padding: 3rem;
  }
  @media (min-width: 1200px) {
    padding: 3rem 5rem;
  }
  @media (min-width: 1400px) {
    padding: 3rem 7.5rem;
  }
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 10px;

  @media (min-width: 776px) {
    margin-bottom: 1rem;
  }
`;

export const FooterColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  padding: 2% 0%;
  gap: 1rem;

  @media (min-width: 578px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
`;

export const FooterColumnLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 992px) {
    gap: 2rem;
  }
  @media (min-width: 1200px) {
    gap: 4rem;
  }
`;

export const FooterColumnContact = styled(FooterColumnLinks)`
  gap: 1rem;
`;

export const FoooterColumnTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const FooterColumnContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FooterLinkItem = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  color: ${({ color }) => color ?? "#677294"};
  transition: 0.2s linear;
  &:hover {
    color: #007dff;
  }
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 1rem 0;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1rem;
  gap: 12px;

  @media (min-width: 576px) {
    align-items: center;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 5rem;
  }
  @media (min-width: 1200px) {
    padding: 2.5rem 7.5rem;
  }
`;

export const Divider = styled.div`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #e9ecf3;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #677294;
`;

export const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
