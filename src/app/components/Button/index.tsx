import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
