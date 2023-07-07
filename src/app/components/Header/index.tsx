import { HeaderContainer, HeaderLogo } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo
        width={170}
        height={46}
        src={"/logo.svg"}
        alt="Logo da emprresa"
      ></HeaderLogo>
    </HeaderContainer>
  );
};
