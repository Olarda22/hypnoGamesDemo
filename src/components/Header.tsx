import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { CloseBurgerIcon, BurgerIcon } from './Icon';
import { ContactButton, PresentationButton } from './Button/Button';

const HeaderWrapper = styled.header`
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  height: 147px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-left: 0 50px;
  z-index: 1;
  background-color: #fff;
  @media (max-width: 1023px) {
    padding: 0 23px;
   height: 89px;
  }
`;

const Logo = styled.img`
  width: 190px;
  height: 85px;
  object-fit: contain;
   @media (max-width: 1023px) {
      width: 136px;
  height: 61px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 16px;
  margin-right: 34px;
  margin-bottom: 16px;
  a {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    transition: color 0.2s ease;
    padding: 3px 12px 3px 12px;
    border-radius: 100px;
    &:hover {
      color: #fff;
      background-color: #F0554D
    }
       &.active {
      background-color: #3A012D; /* цвет для активного пункта */
      color: #fff;
    }
  }
  @media (max-width: 767px) {
    display: none;
    
  }
`;


const BurgerWrapper = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;

    .bm-burger-button {
      position: relative;
      margin-bottom: 19px;
    }

    .bm-menu-wrap {
      top: 0;
      position: fixed;
      height: 100%;
    }
   

    .bm-menu {
      background: #F0554D;
      padding: 4.5em 1.5em 0;
      font-size: 1.15em;
    }
    
    .bm-cross-button{
      margin-top: 28px;
      margin-right: 20px;
      width: 50px;
    }

    .bm-item-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
     a {
      color:  #fff;
      text-transform: uppercase;
      text-decoration: none;
      display: block;
      margin-bottom: 15px;
      font-size: 18px;
       &.active {
      color: #3A012D; 
    }}  
    }
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 16px;
  margin-left: 19px;
  text-transform: uppercase; 
  font-size: 16px;
   @media (max-width: 1023px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: end;
  margin-left: 65px;
    @media (max-width: 1023px) {
      margin-left: 0px;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрываем бургер при смене размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <LogoWrapper>
          <Logo src={logo} alt="Hypno Games" />
          <TitleWrapper>Making gambling easier</TitleWrapper>
        </LogoWrapper>
      </NavLink>


      <NavLinks>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/games">Games</NavLink>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        <ContactButton />
        <PresentationButton />
      </NavLinks>

      <BurgerWrapper>
        <Menu
          right
          noOverlay
          isOpen={menuOpen}
          onStateChange={(state) => setMenuOpen(state.isOpen)}
          customBurgerIcon={<BurgerIcon />}
          customCrossIcon={<CloseBurgerIcon />}

          width={'100%'}
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/games" onClick={() => setMenuOpen(false)}>
            Games
          </NavLink>
          {/* <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink> */}
          <ContactButton />
        </Menu>
      </BurgerWrapper>
    </HeaderWrapper>
  );
}
