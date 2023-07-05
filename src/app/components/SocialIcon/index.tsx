import { IconType } from "react-icons";
import { CustomIcon } from "../CustomIcon";
import { Container } from "./styles";

interface ISocialIcon {
  href: string;
  icon: IconType;
}

export const SocialIcon = ({ href, icon }: ISocialIcon) => {
  return (
    <Container href={href}>
      <CustomIcon icon={icon} size="18" />
    </Container>
  );
};
