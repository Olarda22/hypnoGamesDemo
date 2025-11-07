import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Image = styled.img`
 width: 320px; 
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  // @media ${device.mobileM} {
  //  width: 40%,
  // }
`;
export const Container = styled.div`
margin-top: 34px;
  width: 100%;
  height: 100%;
   height: 220px;
  // @media ${device.tablet} {
  //   display: none;
  // }
`;
export const SwiperContainer = styled.div`

  max-width:1340px;
  margin: 0 auto;
  position: relative;
.swiper {
    position: inherit;
    height: 230px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
      /* Стили для пагинации (точек) */
  .swiper-pagination {
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    // background-color: black;
    // height: 10px;
    position: absolute;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #D5D5D5;
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
    background: #F0554D;
  }
`;
export const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
   top: 50%;
  height: 100%;
  z-index: 2;
   ${({ position }) => (position === 'left' ? 'left: -42px;' : 'right: -42px;')}
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: all;
  @media (max-width: 1023px) {
    display: none;
  }
`;