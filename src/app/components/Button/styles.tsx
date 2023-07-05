import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 45px;
  border: 1px solid #007dff;
  background-color: #0083ff;
  box-shadow: 0 20px 30px 0 rgba(12, 0, 46, 0.1);
  color: white;
  padding: 14px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #007dff;
    background: #fff;
    box-shadow: none;
    border: 1px solid #1857c1;
    transition: all 0.3s linear;
  }
`;
