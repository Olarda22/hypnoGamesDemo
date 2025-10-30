import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 25px;
  margin-bottom: 18px;
  
  //  @media  ${device.tablet} {
  //   height: 100%;
  //  }
  //       @media ${device.mobileM} {
  //      margin-top: 45px;
  // }  
  //   @media ${device.tablet} {
  //   display: none;
  // }
`;

export const AboutWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: space-between;
  // padding-right: 20px; 
  // padding-left: 20px; 
    
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
  width: 660px;
  margin-bottom: 18px;
  // margin-left: 100px;

 @media ${device.laptop} {
  width: 100%;
    // margin-left: 50px; 
  }
//   @media  ${device.tablet} {
//   width: 100%;
//    margin-left: 30px;
//    height: 100%;
//     align-items: center;
//   }   
`;
export const Text = styled.div`
 display: flex;
  flex-direction: column;
  margin-bottom: 37px;
 
  ul {
    list-style-position: inside;
    margin-top: 6px;
    li {
    line-height: 30px;
    }
  }
  `
  
  ;

export const ImageWrapper = styled.div`

// width: 40%;
height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 50%;
  // height: 100%;

  // @media ${device.tablet} {
  //   width: 100%;
  //   height: 100%;
  // }
`;

export const Image = styled.img`
 width: 100%;
  height: 100%;
  object-fit: contain;
  @media ${device.mobileM} {
   height: 85%;
  }
`;


export const PageTitle = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  font-weight: bold;
  line-height: 65px;
  text-transform: uppercase;
`;
export const Info = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBlock = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: row;
  margin-left: ${props => props.margin};
  // @media ${device.tablet} {
  //   margin-left: 50px;
  // }
  @media ${device.mobileM} {
    margin-left: 0;
     margin-left: 50px;
    margin-top: 30px
  }
    @media ${device.mobileS} {
    margin-left: 10px;
    margin-top: 30px;
  }
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
`;
export const InfoImage = styled.img<{ height: string }>`
 width: 100%;
  height: ${props => props.height};
  object-fit: contain;
  // @media ${device.mobileM} {
  //  width: 40%,
  // }
`;
export const InfoTitle = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  color: #F0554D;
`;
export const InfoValue = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  line-height: 50px;
  font-weight: bold;
`;
export const ButtonWrapper = styled.div`
  margin-top: 50px;
  @media ${device.mobileM} {

        display: flex;
        justify-content: center;
        width: 100%;
  }
`;



// export const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   width: 50%;
//   margin-top: 30px;
//   margin-left: 100px;

//  @media ${device.laptop} {
//     margin-left: 50px; 
//   }
//   @media  ${device.tablet} {
//   width: 100%;
//    margin-left: 30px;
//    height: 100%;
//     align-items: center;
//   }   
// `;
export const Description = styled.p`
 
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #541138;
  line-height: 30px;
  // max-width: 660px;
   margin-top: 6px;

  // @media  ${device.tablet} {
  //   width: 100%;
  //   height: 100%;
  // }
`;


export const Title = styled.pre`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  color: #F0554D;
`;