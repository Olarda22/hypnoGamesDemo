import React from "react";
import type { GameCardProps } from "./GameCard.types";

import {
  CardContainer,
  ImageSection,
  ContentSection,
  Description,
  ButtonContainer,
} from "./GameCard.styles";
import { Button } from "../Button/Button";


const GameCard: React.FC<GameCardProps> = ({
  game,
  onClick,
  idx,
  className,
}) => {

  // const handleCardClick = (gameName: string) => 
  //   onClick?.(gameName);
  // };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, gameName: string) => {
  //   if (event.key === "Enter") {
  //     onClick?.(gameName);
  //   }
  // };

  return (
    <CardContainer
      className={className}
      // onClick={handleCardClick}
      // onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`PLAY NOW${game.title}`}>
      <ImageSection $background={game.previewBg}></ImageSection>
      <ContentSection>
        <Description>{game.description}</Description>
        <ButtonContainer>
          <Button
            onClick={() => onClick(game.name)}
            label={`In detail ${game.title}`}
          >
            IN DETAIL
          </Button>
        </ButtonContainer>
      </ContentSection>
    </CardContainer>
  );
};

export default GameCard;
