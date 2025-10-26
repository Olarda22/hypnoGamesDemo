import styled from 'styled-components';
import { NavLinks } from './Header';
import { NavLink } from 'react-router-dom';
import { ContactButton, PresentationButton } from './Button/Button';
const FooterWrapper = styled.footer`
  background-color: #fff;
  height: 70px;
  position: relative;
  // z-index: 10;
  // position: fixed;
  // bottom: 0;
  // left: 0;
  // right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 66px;
`;
const TitleWrapper = styled.div`
  text-transform: uppercase; 
  font-size: 16px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <TitleWrapper>{'© Hypno Games 2025'}</TitleWrapper>
      <NavLinks style={{margin: 0, marginRight: '50px'}}>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        <ContactButton />
        <PresentationButton />  
      </NavLinks>
    </FooterWrapper>
  );
}
