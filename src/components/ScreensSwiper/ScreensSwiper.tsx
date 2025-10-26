import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { CarouseLeftButtonIcon, CarouseRightButtonIcon } from "../Icon";
import type { Game } from '../BannerCard/assets';
import { useMemo } from 'react';
import { Image, NavButton, SwiperContainer, Container } from './ScreensSwiper.styles';
interface Props {
  card: Game
}
const ScreensSwiper = ({ card }: Props) => {
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
          
          // pagination={showPagination ? {
          //   clickable: true,
          //   dynamicBullets: true
          // } : false}
          breakpoints={breakpoints}
          autoplay={false}
          grabCursor={true}
          // watchOverflow={true}
          // centeredSlides={true}
          // slidesPerView={4}
          className="game-carousel-swiper"
        >
          {card.gameScreens.map((screen, idx) => {
            return <SwiperSlide key={idx} style={{ width: '320px' }}>
                <Image src={screen} alt="image" />
            </SwiperSlide>
          })}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default ScreensSwiper;