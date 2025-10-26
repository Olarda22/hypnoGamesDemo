import { CardContainer, Content, Corner, NavButton, SectionWrapper, SwiperContainer, SwiperContainerMobile, Title } from "./Games.styles";

import GameCard from "../GameCard";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useMemo } from "react";
import { CarouseLeftButtonIcon, CarouseRightButtonIcon } from "../Icon";
import { cards } from "../BannerCard";
import { useScreenSize } from "../../utils/useScreenSize";
interface Props {
  title: string;
  top?: string;
  isSwiper?: boolean;
}
export default function Games({ title, top, isSwiper = false }: Props) {
  const navigate = useNavigate();
  const isMobile = useScreenSize();

  const handleGameClick = (gameName: string) => {
    console.log(`Clicked on game ${gameName}`);
    navigate(`/games/${gameName}`)
    // Дополнительная логика при клике на карточку
  };
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

  const renderContent = () => {
    if (isSwiper) {
      if (isMobile.isMobile) {
      
        return <SwiperContainerMobile>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={600} // скорость перехода между слайдами 
            autoplay={{
              delay: 2500, //  между переключениями
              disableOnInteraction: false, // не останавливать при взаимодействии
            }}
            pagination={{
              clickable: true,
            }}
        
          >
            {(Object.keys(cards) as Array<keyof typeof cards>).map((game, idx) => {
              return <SwiperSlide key={cards[game].name}>
                <GameCard game={cards[game]} idx={idx} onClick={handleGameClick} />
              </SwiperSlide>
            })}
          </Swiper>

        </SwiperContainerMobile>
      } else {
        return (
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
              breakpoints={breakpoints}
              autoplay={{
              delay: 2500, //  между переключениями
              disableOnInteraction: false, // не останавливать при взаимодействии
            }}
              grabCursor={true}
              className="game-carousel-swiper"
            >

              {(Object.keys(cards) as Array<keyof typeof cards>).map((game, idx) => {
                return <SwiperSlide key={cards[game].name}>
                  <GameCard game={cards[game]} idx={idx} onClick={handleGameClick} />
                </SwiperSlide>
              })}
            </Swiper>
          </SwiperContainer>

        );
      }

    } else {
      return (
        <CardContainer>
      
          {(Object.keys(cards) as Array<keyof typeof cards>).map((game, idx) => {
            return <GameCard key={cards[game].name} game={cards[game]} idx={idx} onClick={handleGameClick} />
          })}
        </CardContainer>
      );
    }

  };
  return (
    <SectionWrapper style={{ marginTop: top ? top : "0" }}>
      <Corner />
      <Content>
        <Title>{title}</Title>
        {renderContent()}
      </Content>
    </SectionWrapper>

  );
}