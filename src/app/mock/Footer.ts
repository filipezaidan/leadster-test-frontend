import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export const FooterLinks = [
  {
    title: "Links Principais",
    links: [
      { title: "Home", href: "#" },
      { title: "Ferramenta", href: "#" },
      { title: "Preços", href: "#" },
      { title: "Contato", href: "#" },
    ],
  },
  {
    title: "Cases",
    links: [
      { title: "Geração de Leads B2B", href: "#" },
      { title: "Geração de Leads em Software", href: "#" },
      { title: "Geração de Leads em Imobiliária", href: "#" },
      { title: "Cases de Sucesso", href: "#" },
    ],
  },
  {
    title: "Materiais",
    links: [
      { title: "Blog", href: "#" },
      { title: "Parceria com Agências", href: "#" },
      { title: "Guia Definitivo do Marketing", href: "#" },
      { title: "Materiais Gratuitos", href: "#" },
    ],
  },
];

export const FooterContact = {
  email: {
    name: "E-mail",
    value: "contato@leadster.com",
  },
  telephone: {
    name: "Telefone",
    value: "(42) 98828-9851",
  },
  socials: [
    { name: "Linkedin", icon: FaLinkedinIn, href: "#" },
    { name: "Facebook", icon: FaFacebookF, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
  ],
};
