import { useNavigate, useParams } from 'react-router-dom';
import { useScreenSize } from '../utils/useScreenSize';
import MainSliderMobile from '../components/MainSliderMobile/MainSliderMobile';
import MainSlider from '../components/MainSlider/MainSlider';
import { BannerCard, cards } from '../components/BannerCard';
import { BannerCardSmall } from '../components/BannerCard/BannerCardSmall';
import { Banner, BannerWrapper, ButtonWrapper } from './GamePage.styles';
import type { Game } from '../components/BannerCard/assets';
import ScreensSwiper from '../components/ScreensSwiper/ScreensSwiper';
import { useEffect, useState } from 'react';
import { AboutGame } from '../components/AboutGame/AboutGame';
import Games from '../components/Games/Games';
import { Button } from '../components/Button/Button';


export default function GamePage() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState<Game | null>(null)

  const params = useParams<{ name: keyof typeof cards }>();

  useEffect(() => {
    if (!params) return
    const name = params.name;
    const card = name ? cards[name] : null;
    setCurrentGame(card)
  }, [params])
  // const inDetailHandler = (card: Card) => {
  //   console.log('inDetailHandler');
  //     navigate(`/games/${card.name}`)
  // };
  const playNowHandler = (game: Game) => {
    console.log('playNowHandler');
    //navigate(`/games/${card.name}`)

  };
  const moreGamesHandler = () => {
    console.log('moreGamesHandler');
    navigate(`/games`)

  };
  if (!currentGame) return null
  return (
    <>
      <BannerWrapper>
        {isMobile ? <Banner><BannerCardSmall card={currentGame} buttonTitle='Play now' onClick={playNowHandler} /></Banner> : <BannerCard card={currentGame} buttonTitle='Play now' onClick={playNowHandler} />}
      </BannerWrapper>
      <ScreensSwiper card={currentGame} />
      <AboutGame game={currentGame} />
      <Games title="Other games" top={isMobile ? "0px" : "70px"} isSwiper={true} />
      <ButtonWrapper>
        <Button
          onClick={() => moreGamesHandler()}
          label={'more games'}
        >
          More Games
        </Button>
      </ButtonWrapper>

    </>
  );
}
