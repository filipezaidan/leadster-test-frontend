/* eslint-disable react/jsx-key */
"use client";

import Image from "next/image";
import { SocialIcon } from "../SocialIcon";
import { FooterContact, FooterLinks } from "@/app/mock/Footer";
import {
  Columns,
  LinkItem,
  ColumnLinksContainer,
  ColumnTitle,
  Container,
  Divider,
  FooterContent,
  HeaderContent,
  Text,
  ColumnLinks,
  ColumnContact,
  SocialIconsWrapper,
} from "./styles";

const { email, telephone, socials } = FooterContact;

export const Footer = () => {
  return (
    <>
      <Container>
        <HeaderContent>
          <Image
            src="/logo.gif"
            width={270}
            height={62}
            alt="Gif da logo da empresa Leadster"
          />
          <Text>Transformando visitantes em clientes.</Text>
        </HeaderContent>
        <Columns>
          {FooterLinks.map(({ title, links }, key) => (
            <ColumnLinks key={key}>
              <ColumnTitle>{title}</ColumnTitle>
              <ColumnLinksContainer>
                {links.map((link, key) => (
                  <LinkItem key={key} href={link.href}>
                    {link.title}
                  </LinkItem>
                ))}
              </ColumnLinksContainer>
            </ColumnLinks>
          ))}
          <ColumnContact>
            <ColumnTitle>Siga a Leadster</ColumnTitle>
            <SocialIconsWrapper>
              {socials.map((social, key) => (
                <SocialIcon key={key} {...social} />
              ))}
            </SocialIconsWrapper>
            <Text>{`${email.name}: ${email.value} `}</Text>
            <Text>{`${telephone.name}: ${telephone.value} `}</Text>
          </ColumnContact>
        </Columns>
        <Divider />
        <FooterContent>
          <Text>
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <LinkItem color="#00aff0" href="#">
              Leadster
            </LinkItem>
          </Text>

          <Text>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{" "}
            <LinkItem href="#">Termos de uso</LinkItem>
          </Text>
        </FooterContent>
      </Container>
    </>
  );
};
