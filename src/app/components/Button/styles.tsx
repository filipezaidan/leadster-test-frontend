import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  border: 1px solid #007dff;
  background-color: #0083ff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: #007dff;
    background: #fff;
    box-shadow: none;
    border: 1px solid #1857c1;
  }
`;
