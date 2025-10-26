import { CarouseLeftButtonIcon, CarouseRightButtonIcon } from "../Icon.tsx";
import { CarouselSection, NavButton, SwiperWrapper } from "./MainSliderMobile.styles.ts";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useScreenSize } from "../../utils/useScreenSize.ts";
// import { cards } from "../SlidesCard/assets/index.ts";
// import { SlidesCard } from "../SlidesCard/SlidesCard.tsx";
import { BannerCardSmall } from "../BannerCard/BannerCardSmall.tsx";
import { cards } from "../BannerCard/index.ts";
import { useNavigate } from "react-router-dom";
import type { Game } from "../BannerCard/assets/index.ts";


export default function MainSliderMobile() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const clickHandler = (game: Game) => {
    console.log('clickHandler');
    // navigate(`/games/${card.name}`)
  };
  return (
    <SwiperWrapper>
      <CarouselSection>
        {/* {!isMobile && (
          <>
            <NavButton className="swiper-button-prev-custom" position="left">
              <CarouseLeftButtonIcon />
            </NavButton>
            <NavButton className="swiper-button-next-custom" position="right">
              <CarouseRightButtonIcon />
            </NavButton>
          </>
        )} */}
        {/* Слайдер */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          speed={600} // скорость перехода между слайдами 
          // autoplay={{
          //   delay: 2500, //  между переключениями
          //   disableOnInteraction: false, // не останавливать при взаимодействии
          // }}

          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            clickable: true,
          }}
        // height={600}

        //  pagination={{
        //     clickable: true,
        //     bulletClass: 'swiper-pagination-bullet custom-bullet',
        //     bulletActiveClass: 'custom-bullet-active',
        //  }}
        // breakpoints={{
        //   0: { slidesPerView: 1 },
        //   768: { slidesPerView: 1 },
        //   1200: { slidesPerView: 1 },
        // }}
        >
          {(Object.keys(cards) as Array<keyof typeof cards>).map((card) => (
            <SwiperSlide key={card} style={{ display: 'flex', justifyContent: 'center', paddingLeft: '12px', paddingRight: '12px' }}>
              {/* <SlidesCard card={card} /> */}
              <BannerCardSmall card={cards[card]} buttonTitle="play now" onClick={() => clickHandler(cards[card])} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSection>
    </SwiperWrapper>
  )
}

