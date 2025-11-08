import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { CarouseLeftButtonIcon, CarouseRightButtonIcon } from "../Icon";
import type { Game } from '../../data';
import { useMemo } from 'react';
import { Image, NavButton, SwiperContainer, Container } from './ScreensSwiper.styles';
import { useScreenSize } from '../../utils/useScreenSize';
interface Props {
  card: Game,
  onCardClick: (idx: number) => void
}
const ScreensSwiper = ({ card, onCardClick }: Props) => {
  const { isMobile } = useScreenSize();
  const breakpoints = useMemo(() => ({
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1440: {
      slidesPerView: 4,
    }
  }), [])

  if (!card) return null
  return (
    <Container>
      <SwiperContainer>
        <NavButton className="swiper-button-prev-custom" position="left">
          <CarouseLeftButtonIcon />
        </NavButton>
        <NavButton className="swiper-button-next-custom" position="right">
          <CarouseRightButtonIcon />
        </NavButton>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
           pagination={isMobile &&{
            clickable: true,
          }}
          
          breakpoints={breakpoints}
          autoplay={false}
          grabCursor={true}
          className="game-carousel-swiper"
        >
          {card.gameScreens.map((screen, idx) => {
            return <SwiperSlide key={idx} style={{ width: '320px' }} onClick={() => onCardClick(idx)}>
                <Image src={screen} alt="image" />
            </SwiperSlide>
          })}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default ScreensSwiper;