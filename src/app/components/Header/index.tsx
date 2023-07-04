"use client";

import Image from "next/image";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image
        src={"/logo.png"}
        width={150}
        height={100}
        alt="Logo da emprresa"
        style={{ objectFit: "contain" }}
      />
    </Container>
  );
};
