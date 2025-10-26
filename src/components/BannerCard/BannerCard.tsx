import React from "react";
import { Container, Layer, Title, Description, TitleWrapper, ButtonWrapper } from "./BannerCard.styles";

import { cards, type Card } from "./assets";
import { Button } from "../Button/Button";


export interface BannerCardProps {
  card: Card; 
  className?: string;
  onClick: (card: Card) => void;
  buttonTitle?: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ className, card, onClick, buttonTitle }) => {
  return (
    <Container className={className}>
      <Layer
        $img={card.background}
      />
      <TitleWrapper >
        <Title>{card.title}</Title>
        <Description style={{ marginTop: '13px' }}>{card.description}</Description>
      </TitleWrapper>

      <ButtonWrapper>
        <Button label={buttonTitle ? buttonTitle : 'IN DETAIL'} onClick={() => onClick(card)}>{buttonTitle ? buttonTitle : 'IN DETAIL'}</Button>
      </ButtonWrapper>
    </Container>
  );
};
