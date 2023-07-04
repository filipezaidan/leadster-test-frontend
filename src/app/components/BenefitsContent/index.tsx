"use client";

import Image from "next/image";
import {
  BackgroundElement,
  Container,
  LeftContent,
  RightContent,
  Title,
  Subtitle,
  Divider,
  ElementsContainer,
  Button,
  Text,
  DivFlex,
} from "./styles";

export const BenefitsContent = () => {
  return (
    <Container>
      <LeftContent>
        <Image
          src="/comparativo.png"
          width={739}
          height={687}
          alt="Imagem de comparativos de leads entre os serviços de CTA"
          style={{ zIndex: 2, objectFit: "contain" }}
        />
        <BackgroundElement />
      </LeftContent>
      <RightContent>
        <ElementsContainer>
          <Title>
            Pronto para triplicar sua <strong>Geração de Leads?</strong>
          </Title>
          <Subtitle>
            Criação e ativação em <strong>4 minutos.</strong>
          </Subtitle>
          <Divider />
          <DivFlex gap={20}>
            <Button>VER DEMOSTRAÇÃO</Button>
            <Image src="/selo.png" width={200} height={70} alt="Selo " />
          </DivFlex>
          <DivFlex gap={5}>
            <Image
              src="/credit-card.webp"
              width={16}
              height={16}
              alt="Icone de cartão de crédito"
            />
            <Text>
              <strong>Não</strong> é necessário Cartão de Crédito |
            </Text>
            <Image
              src="/rating.webp"
              width={92}
              height={16}
              alt="Icone de qualificação do serviço"
            />
            <Text>
              <strong>4.9/5</strong> média de satisfação
            </Text>
          </DivFlex>
        </ElementsContainer>
      </RightContent>
    </Container>
  );
};
