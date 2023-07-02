"use client";

import Image from "next/image";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image
        src={"/logo.png"}
        width={195}
        height={42}
        alt="Logo da emprresa"
        style={{ objectFit: "contain" }}
      />
    </Container>
  );
};
