import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Image = styled.img`
 width: 320px; 
  height: 200px;
  object-fit: contain;
  // @media ${device.mobileM} {
  //  width: 40%,
  // }
`;
export const Container = styled.div`
margin-top: 34px;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    display: none;
  }
`;
export const SwiperContainer = styled.div`

  max-width:1340px;
  margin: 0 auto;
  position: relative;

  // .swiper-slide {
  //   width: 320px;
  //   background-color: red;
  // }
`;
export const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
   top: 50%;
  height: 100%;
  z-index: 1000;
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