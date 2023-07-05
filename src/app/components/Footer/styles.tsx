import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2%;
`;
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  gap: 10px;
`;
export const Columns = styled.div`
  display: flex;
  width: 100%;
  padding: 2% 0%;
  justify-content: center;
`;

export const ColumnLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const ColumnContact = styled(ColumnLinks)`
  gap: 10px;
`;

export const ColumnTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ColumnLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkItem = styled(Link)`
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
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2% 0%;
`;

export const Divider = styled.div`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #e9ecf3;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: #677294;
`;
