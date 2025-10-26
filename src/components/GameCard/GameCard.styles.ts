import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const CardContainer = styled.div`
  width: 320px;
  height: 550px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  position: relative;
  margin-bottom: 46px;
  
  @media ${device.mobileM} {
    margin-left: 0
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageSection = styled.div<{$background: string  }>`
  height: 250px;
  position: relative;
    background-image: url(${props => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;


export const ContentSection = styled.div`
  margin-top: 30px;
  margin-left: 23px;
  margin-right: 23px;
  margin-bottom: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // @media (max-width: 1023px) {
  //   padding: 20px;
  // }
`;


export const Description = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  color: #541138;

  display: -webkit-box;
  -webkit-line-clamp: 6; /* количество строк (190px / 30px ≈ 6 строк) */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 21px;
    left: 0;
    right: 0;
`;
