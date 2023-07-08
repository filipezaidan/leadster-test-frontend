"use client";

import Image from "next/image";
import {
  LeftContentElement,
  Container,
  LeftContent,
  RightContent,
  RightContentTitle,
  RightContentSubtitle,
  RightContentDivider,
  RightContentContainer,
  RightContentButton,
  Text,
  RightContentElement,
  LeftContentImage,
  RightContentRow,
} from "./styles";

export const BenefitsContent = () => {
  return (
    <Container>
      <LeftContent>
        <LeftContentImage
          src="/comparativo.png"
          width={618}
          height={578}
          alt="Imagem de comparativos de leads entre os serviços de CTA"
        />
        <LeftContentElement />
      </LeftContent>
      <RightContent>
        <RightContentContainer>
          <RightContentTitle>
            Pronto para triplicar sua <strong>Geração de Leads?</strong>
          </RightContentTitle>
          <RightContentSubtitle>
            Criação e ativação em <strong>4 minutos.</strong>
          </RightContentSubtitle>
          <RightContentDivider />
          <RightContentElement gap={20}>
            <RightContentButton>VER DEMOSTRAÇÃO</RightContentButton>
            <Image
              src="/selo.png"
              width={200}
              height={70}
              alt="Selo da RD Stations - TOP 10 "
            />
          </RightContentElement>
          <RightContentElement gap={5}>
            <RightContentRow>
              <Image
                src="/credit-card.webp"
                width={16}
                height={16}
                alt="Icone de cartão de crédito"
              />
              <Text>
                <strong>Não</strong> é necessário Cartão de Crédito |
              </Text>
            </RightContentRow>
            <RightContentRow>
              <Image
                src="/rating.webp"
                width={92}
                height={16}
                alt="Icone de qualificação do serviço"
              />
              <Text>
                <strong>4.9/5</strong> média de satisfação
              </Text>
            </RightContentRow>
          </RightContentElement>
        </RightContentContainer>
      </RightContent>
    </Container>
  );
};
