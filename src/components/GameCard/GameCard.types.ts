import type { Game } from "../BannerCard/assets";

export interface GameCardProps {
  game: Game;
  onClick: (gameName: string) => void;
  onDetailClick?: (gameId: number) => void;
  idx: number;
  className?: string;
}