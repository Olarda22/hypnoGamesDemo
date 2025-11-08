import { useNavigate, useParams } from 'react-router-dom';
import { useScreenSize } from '../utils/useScreenSize';
import { BannerCard, cards } from '../components/BannerCard';
import { BannerCardSmall } from '../components/BannerCard/BannerCardSmall';
import { Banner, BannerWrapper, ButtonWrapper, ViewerWrapper } from './GamePage.styles';
import type { Game } from '../data/assets';
import ScreensSwiper from '../components/ScreensSwiper/ScreensSwiper';
import { useCallback, useEffect, useState } from 'react';
import { AboutGame } from '../components/AboutGame/AboutGame';
import Games from '../components/Games/Games';
import { Button } from '../components/Button/Button';
import { GameModal } from '../components/GameModal';
import ImageViewer from 'react-simple-image-viewer';
import { CarouseLeftButtonIcon, CarouseRightButtonIcon, CloseIcon } from '../components/Icon';

export default function GamePage() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState<Game | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const params = useParams<{ name: keyof typeof cards }>();

  useEffect(() => {
    if (!params) return
    const name = params.name;
    const card = name ? cards[name] : null;
    setCurrentGame(card)
  }, [params])

  const playNowHandler = (game: Game) => {
    if (isMobile) {
      navigate('/game-play', {
        state: {
          gameUrl: game.gameUrl,
          gameName: game.gameName
        }
      });
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const moreGamesHandler = () => {
    navigate(`/games`)
  };

  const onCardClickHandler = (idx: number) => {
    openImageViewer(idx)
  };
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  if (!currentGame) return null
  return (
    <>
      <BannerWrapper>
        {isMobile ? <Banner>
          <BannerCardSmall card={currentGame} buttonTitle='Play now' onClick={playNowHandler} /></Banner>
          : <BannerCard card={currentGame} buttonTitle='Play now' onClick={playNowHandler} />}
      </BannerWrapper>
      <ScreensSwiper card={currentGame} onCardClick={onCardClickHandler} />
      <ViewerWrapper>
        {isViewerOpen && (
          <ImageViewer
            src={currentGame.gameScreensFull}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            leftArrowComponent={<CarouseLeftButtonIcon />}
            rightArrowComponent={<CarouseRightButtonIcon />}
            closeComponent={<CloseIcon />}
          />
        )}
      </ViewerWrapper>
      <AboutGame game={currentGame} />
      <Games title="Other games" top={isMobile ? "0px" : "70px"} isSwiper={false} />
      <ButtonWrapper>
        <Button
          onClick={() => moreGamesHandler()}
          label={'more games'}
        >
          More Games
        </Button>
      </ButtonWrapper>

      <GameModal
        isOpen={isModalOpen}
        onClose={closeModal}
        gameUrl={currentGame?.gameUrl || ''}
        gameName={currentGame?.gameName || ''}
      />
    </>
  );
}
