import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SwiperWrapper = styled.div`

  margin-top: -15px;
  
  position: relative;
  .swiper {
    @media ${device.laptop}{
      height: 500px;
    }
      @media ${device.tablet} {
    height: 400px;
  }
  }
      .swiper-wrapper {
    // margin-top: 65px;
  
    /* Стили для пагинации (точек) */
  .swiper-pagination {
    bottom: -20px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .custom-bullet {
    width: 10px;
    height: 10px;
    background: #ff9d00; /* оранжевый */
    opacity: 0.4;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .custom-bullet-active {
    opacity: 1;
    transform: scale(1.2);
    background: #ff7b00; /* чуть ярче при активном */
  }
  }
`;

export const CarouselSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  height: 100%;
  z-index: 1000;
   ${({ position }) => (position === 'left' ? 'left: 0px;' : 'right: 0px;')}
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: all;
  @media (max-width: 1023px) {
    display: none;
  }
`;
