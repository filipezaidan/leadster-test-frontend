import { ButtonContainer } from "./styles";

interface IButton {
  children: React.ReactNode;
}

export const Button = ({ children }: IButton) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};
