import { IconContext, IconType } from "react-icons";

interface ICustomIcon {
  icon: IconType;
  color?: string;
  size?: string | undefined;
}

export const CustomIcon = ({ icon: Icon, color, size }: ICustomIcon) => {
  return (
    <IconContext.Provider value={{ color, size }}>
      <Icon />
    </IconContext.Provider>
  );
};
