import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 1340px;
  height: 600px;
   @media ${device.laptop} {
      height: 500px;
  }
      
  @media ${device.tablet} {
      height: 400px;
  }
`;

export const Layer = styled.div<{
  width?: string;
  height?: string;
  $img?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}>`
  ${({ $img }) => $img ? `background-image: url("${$img}");` : ''}
  // position: absolute;
  // top: ${props => props.top};
  // left: ${props => props.left};
  // bottom: ${props => props.bottom};
  // right: ${props => props.right};
  // width: 1340px;
  background-size: contain; /* или cover */
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 600px; 
   width: 100%;
  @media ${device.laptop} {
      height: 500px;
  }
      @media ${device.tablet} {
     height: 400px;
  }
`;


export const TitleWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 107px;
  @media ${device.laptop} {
    top: 100px;
    left: 85px;
 }
  @media ${device.tablet} {
    top: 77px;
    left: 70px;
}
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 113px;
  bottom: 74px;
  button {
    &:hover {
      background: #FE7454;
    }
  }
 
    @media ${device.laptop} {
     bottom: 50px;
    }
     @media ${device.tablet} {
      bottom: 40px;
    }
`;

export const Title = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  line-height: 65px;
  text-transform: uppercase;
    @media ${device.laptop} {
      font-size: 48px;
      line-height: 55px;
    }
      @media ${device.tablet} {
        font-size: 32px;
        line-height: 38px;
      }
`;

export const Description = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  color: #fff;
  width: 460px;
  white-space: pre-wrap;
  line-height: 30px;
  font-weight: 200;
`;