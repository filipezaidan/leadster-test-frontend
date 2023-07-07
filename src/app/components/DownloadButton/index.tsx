import { VscCloudDownload } from "react-icons/vsc";

import {
  DownloadButtonContainer,
  DownloadButtonIcon,
  DownloadButtonContent,
  DownloadButtonTitle,
} from "./styles";

const typeButtonDownloadColors = {
  xls: {
    title: "Spreadsheet.xls",
    colors: {
      primary: "#0EB488",
      second: "#9FEFDF",
      background: "#C2F4EA",
    },
  },
  doc: {
    title: "Document.doc",
    colors: {
      primary: "#007EFF",
      second: "#A1D9FF",
      background: "#C2E6FF",
    },
  },
  ppt: {
    title: "Presentation.ppt",
    colors: {
      primary: "#A99445",
      second: "#FFF1A0",
      background: "#FFF8D0",
    },
  },
  folder: {
    title: "folder.zip",
    colors: {
      primary: "#7D878F",
      second: "#D0DEE7",
      background: "#E8EEF3",
    },
  },
};

type DownloadButtonType = "xls" | "doc" | "ppt";

interface DownloadButtonProps {
  type: DownloadButtonType;
}

export const DownloadButton = ({ type }: DownloadButtonProps) => {
  const { title, colors } = typeButtonDownloadColors[type];

  return (
    <DownloadButtonContainer bg={colors.background}>
      <DownloadButtonIcon bg={colors.second}>
        <VscCloudDownload color={colors.primary} size={20} />
      </DownloadButtonIcon>
      <DownloadButtonContent>
        <DownloadButtonTitle color={colors.primary}>
          {title}
        </DownloadButtonTitle>
      </DownloadButtonContent>
    </DownloadButtonContainer>
  );
};
