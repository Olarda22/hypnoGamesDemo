import React from "react";
import { Container, Image, Title, Description, TitleWrapper, ButtonWrapper } from "./BannerCardSmall.styles";

// import { cards, type Game } from "./assets";
import { Button } from "../Button/Button";
import hgLogo from '../../assets/hg-logo.svg';
import type { BannerCardProps } from "./BannerCard";
// interface BannerCardProps {

export const BannerCardSmall: React.FC<BannerCardProps> = ({ className, card, onClick, buttonTitle }) => {
  return (
    <Container className={className}>
      <Image
        img={hgLogo}
        zIndex={1}
        height="227px"
      />
      <Image
        img={card.logo}
        zIndex={2}
        top="-25px"
      />

      <TitleWrapper >
        <Title>{card.mobile_title}</Title>
        <Description style={{ marginTop: '9px' }}>{card.description}</Description>
      </TitleWrapper>

      <ButtonWrapper>
        <Button label={buttonTitle ? buttonTitle : 'Play now'} onClick={() => onClick(card)}>{buttonTitle ? buttonTitle : 'Play now'}</Button>
      </ButtonWrapper>
    </Container>
  );
};
