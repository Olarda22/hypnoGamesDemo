import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
background-color: #F0554D;
  width: 100%;
  height: 504px;
  border-radius: 20px;
  position: relative;
  @media ${device.tablet} {
    height: 400px;
  }
  @media ${device.mobileM} {
    height: 460px;
  }
     @media ${device.mobileS} {
    height: 504px;
  }
`;

export const Image = styled.div<{
  width?: string;
  height?: string;
  img?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  zIndex?: number;
}>`
  ${({ img }) => img ? `background-image: url("${img}");` : ''}
  position: absolute;
  width: 100%;
  height: ${props => props.height ? props.height : '256px'};
  background-size: contain; /* или cover */
  background-repeat: no-repeat;
  background-position: center;
  top: ${props => props.top ? props.top : '0'};
  left:0;
  right:0;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 239px;
  left:0;
  right:0;
  display: flex;
  flex-direction: column;
  align-items: center;

margin-top: 24px;
 padding-left: 20px;
    padding-right: 20px;
 }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
    button {
      &:hover {
      background: #FE7454;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(240, 85, 77, 0.3);
    }
  }
`;

export const Title = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  line-height: 32px;
  text-transform: uppercase;
  text-wrap: wrap;
  text-align: center;
`;

export const Description = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #fff;
  white-space: pre-wrap;
  line-height: 22px;
  font-weight: 200;
  text-align: center;
`;