import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useScreenSize } from "../utils/useScreenSize";
import MainSliderMobile from "../components/MainSliderMobile/MainSliderMobile";
import MainSlider from "../components/MainSlider/MainSlider";
import Games from "../components/Games/Games";

const GamesContainer = styled.div`
  padding: 2rem;
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CarouselSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export default function GamesPage() {
    const { isMobile } = useScreenSize()
 

  return (
    <>
      {isMobile ? <MainSliderMobile /> : <MainSlider />}
  
       <Games title="More games" top="22px"/>
      {/* <GamesContainer>
        <CarouselSection>
          <GameCarousel
            games={gamesData}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={30}
            showNavigation={true}
            showPagination={true}
            cardType="standard"
            onGameClick={handleGameClick}
            onDetailClick={handleDetailClick}
          />
        </CarouselSection>
      </GamesContainer> */}
    </>
  );
}
