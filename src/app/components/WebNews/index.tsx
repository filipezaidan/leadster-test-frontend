"use client";

import Image from "next/image";
import {
  Wrapper,
  Container,
  ContainerTitle,
  Description,
  ImageTitle,
  Subtitle,
  Tag,
  TagTitle,
  Title,
  Divider,
  Text,
} from "./styles";

// TODO: adjust gap between the elements
export const WebNews = () => {
  return (
    <Wrapper>
      <Container>
        <Tag>
          <TagTitle>WEBINARS EXCLUSIVOS</TagTitle>
        </Tag>
        <Subtitle>Menos Conversinha,</Subtitle>
        <ContainerTitle>
          <Title>Mais Conversação</Title>
          <Description>{`#2c83fb -> #1f76f0 (-45º)`}</Description>
          <ImageTitle>
            <Image
              width={49}
              height={32}
              src="/asset-header.png"
              alt={`Icone acima da letra "o" do texto "Mais Conversação" `}
            />
          </ImageTitle>
        </ContainerTitle>
        <Divider />
        <Text>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </Text>
      </Container>
    </Wrapper>
  );
};
