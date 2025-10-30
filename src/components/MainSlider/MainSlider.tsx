import { CarouseLeftButtonIcon, CarouseRightButtonIcon } from "../Icon";
import { CarouselSection, NavButton, SwiperWrapper } from "./MainSlider.styles";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useScreenSize } from "../../utils/useScreenSize";
// import { cards } from "../SlidesCard/assets";
// import { SlidesCard } from "../SlidesCard/SlidesCard";
import { BannerCard, cards } from "../BannerCard";
import { useNavigate } from "react-router-dom";
import type { Game } from "../BannerCard/assets";


export default function MainSlider() {
  // const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const inDetailHandler = (game: Game) => {
    console.log('inDetailHandler');
    navigate(`/games/${game.name}`)
  };

  return (
    <SwiperWrapper>
      <NavButton className="swiper-button-prev-custom" position="left">
                <CarouseLeftButtonIcon />
              </NavButton>
              <NavButton className="swiper-button-next-custom" position="right">
                <CarouseRightButtonIcon />
              </NavButton>
      <CarouselSection>

        {/* Слайдер */}
        <Swiper
          modules={[Navigation, Autoplay]}
          // spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600} // скорость перехода между слайдами
          autoplay={{
            delay: 10000, //пауза между переключениями
            disableOnInteraction: false, // не останавливать при взаимодействии
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          centeredSlides={true}
        >
          {(Object.keys(cards) as Array<keyof typeof cards>).map((card) => (
            <SwiperSlide key={card} style={{ display: 'flex', justifyContent: 'center' }}>
              
              <BannerCard card={cards[card]} buttonTitle="in detail" onClick={() => inDetailHandler(cards[card])} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSection>
    </SwiperWrapper>
  )
}

