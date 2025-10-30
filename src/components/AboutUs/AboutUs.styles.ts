import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  height: 544px;
  margin-bottom: 18px;
   @media  ${device.tablet} {
    height: 100%;
   }
        @media ${device.mobileM} {
       margin-top: 55px;
  }  
   
`;

export const AboutWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  padding-right: 20px; 
  padding-left: 20px; 
    
  @media ${device.laptop} {
      padding-right: 20px; 
      padding-left: 20px; 
  }
  @media ${device.mobileM} {
    flex-direction: column;
    align-items: center;
    width: 100%;

  }  
 
    
    
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  margin-top: 30px;
  margin-left: 100px;

 @media ${device.laptop} {
    margin-left: 50px; 
  }
  @media  ${device.tablet} {
    width: 100%;
    margin-left: 30px;
    margin-right: 15px;
    height: 100%;
    align-items: center;
  }   
`;

export const Image = styled.img`
 width: 50%;
  height: 100%;
  object-fit: contain;
  @media ${device.mobileM} {
   width: 40%,
  }
`;

export const Description = styled.p`
 
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #541138;
  line-height: 30px;
  max-width: 548px;

  @media  ${device.tablet} {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  font-weight: bold;s
  line-height: 65px;
  text-transform: uppercase;
`;