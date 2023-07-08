import Image from "next/image";
import { SocialIcon } from "../SocialIcon";
import { FooterContact, FooterLinks } from "@/app/mock/Footer";
import {
  FooterColumnsContainer,
  FooterLinkItem,
  FooterColumnContent,
  FoooterColumnTitle,
  FooterWrapper,
  Divider,
  FooterContent,
  FooterHeader,
  FooterText,
  FooterColumnLinks,
  FooterColumnContact,
  SocialIconsWrapper,
  FooterContainer,
  FooterInformation,
  FooterContactContainer,
} from "./styles";

const { email, telephone, socials } = FooterContact;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterHeader>
          <Image
            src="/logo.gif"
            width={270}
            height={62}
            alt="Gif da logo da empresa Leadster"
          />
          <FooterText>Transformando visitantes em clientes.</FooterText>
        </FooterHeader>
        <FooterColumnsContainer>
          {FooterLinks.map(({ title, links }, key) => (
            <FooterColumnLinks key={key}>
              <FoooterColumnTitle>{title}</FoooterColumnTitle>
              <FooterColumnContent>
                {links.map((link, key) => (
                  <FooterLinkItem key={key} href={link.href}>
                    {link.title}
                  </FooterLinkItem>
                ))}
              </FooterColumnContent>
            </FooterColumnLinks>
          ))}
          <FooterColumnContact>
            <FoooterColumnTitle>Siga a Leadster</FoooterColumnTitle>
            <FooterContactContainer>
              <SocialIconsWrapper>
                {socials.map((social, key) => (
                  <SocialIcon key={key} {...social} />
                ))}
              </SocialIconsWrapper>
              <FooterInformation>
                <FooterText>{`${email.name}: ${email.value} `}</FooterText>
                <FooterText>{`${telephone.name}: ${telephone.value} `}</FooterText>
              </FooterInformation>
            </FooterContactContainer>
          </FooterColumnContact>
        </FooterColumnsContainer>
      </FooterContainer>
      <Divider />
      <FooterContent>
        <FooterText>
          Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
          <FooterLinkItem color="#00aff0" href="#">
            Leadster
          </FooterLinkItem>
        </FooterText>

        <FooterText>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{" "}
          <FooterLinkItem href="#">Termos de uso</FooterLinkItem>
        </FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};
