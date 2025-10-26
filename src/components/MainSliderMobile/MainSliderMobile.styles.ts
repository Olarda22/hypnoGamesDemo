import styled from "styled-components";

export const SwiperWrapper = styled.div`
  margin-top: -15px;
  height: 531px;
  position: relative;
  .swiper {
    position: inherit;
  }
  .swiper-wrapper {
    margin-top: 65px;

    @media (max-width: 767px) {
      margin-top: 25px;
    }
  }

  /* Стили для пагинации (точек) */
  .swiper-pagination {
    // bottom: -20px !important;
    bottom: -20px !important;
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
    background: #ff7b00;
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
  z-index: 1000;
   ${({ position }) => (position === 'left' ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: all;
  @media (max-width: 1023px) {
    display: none;
  }
`;
