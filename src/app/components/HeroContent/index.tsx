import {
  HeroWrapper,
  HeroContainer,
  HeroContainerTitle,
  HeroSubtitle,
  HeroTag,
  HeroTagTitle,
  HeroTitle,
  HeroDivider,
  HeroDescription,
  HeroTitleBackground,
} from "./styles";

export const HeroContent = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroTag>
          <HeroTagTitle>WEBINARS EXCLUSIVOS</HeroTagTitle>
        </HeroTag>
        <HeroSubtitle>Menos Conversinha,</HeroSubtitle>
        <HeroContainerTitle>
          <HeroTitle>
            <HeroTitleBackground>Mais Conversação</HeroTitleBackground>
          </HeroTitle>
        </HeroContainerTitle>
        <HeroDivider />
        <HeroDescription>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio.
        </HeroDescription>
      </HeroContainer>
    </HeroWrapper>
  );
};
