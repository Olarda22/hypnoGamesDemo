import styled from 'styled-components';

export const Title = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  font-weight: bold;
  line-height: 65px;
  text-transform: uppercase;
  margin-top: 40px;
`;
export const SectionWrapper = styled.section`
  overflow: hidden;
`;
export const Corner = styled.div`
 width: 100%;
    height: 30px;
    border-top: 22px solid transparent;
    border-left: 100vw solid #E5ECEF;
`;
export const Content = styled.div`
  background-color: #E5ECEF;

     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const CardContainer = styled.div`
  max-width: 1440px;           /* ограничивает ширину контейнера */
  margin: 25px auto 177px;     /* центрирует контейнер */
  padding: 0 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 320px));
  justify-content: center;  
  justify-items: start; 

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 320px);
  }
  @media (min-width: 1040px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 320px);
  }
  @media (min-width: 700px) and (max-width: 1039px) {
    grid-template-columns: repeat(2, 320px);
  }
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`;
export const SwiperContainer = styled.div`

  max-width:1340px;
  margin: 0 auto;
  position: relative;

`;

export const SwiperContainerMobile = styled.div`
  width: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
  .swiper {
    position: inherit;
  }
    .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    /* Стили для пагинации (точек) */
  .swiper-pagination {
    bottom: 20px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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

export const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
   top: 50%;
  height: 100%;
  z-index: 1000;
   ${({ position }) => (position === 'left' ? 'left: -42px;' : 'right: -32px;')}
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: all;
  @media (max-width: 1023px) {
    display: none;
  }
`;
