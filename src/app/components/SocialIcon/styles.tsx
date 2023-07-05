import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 45px;
  color: #858da8;
  background: #ebeef5;
  text-align: center;
  transition: all 0.2s linear;

  &:hover {
    background: #00aff0;
    color: #fff;
  }
`;
