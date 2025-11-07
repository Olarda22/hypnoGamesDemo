import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1400px;
  height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;

  @media (max-width: 767px) {
    width: 95%;
    height: 90vh;
    border-radius: 12px;
  }
`;

export const CloseButton = styled.button`
position: absolute;
  top: -50px;
  right: -50px;

  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  width: 40px;
  height: 40px;

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  @media (max-width: 767px) {
    font-size: 28px;
    width: 36px;
    height: 36px;
  }
`;

export const GameIframe = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  border-radius: 16px;
  background: #ffffff;

  @media (max-width: 767px) {
    border-radius: 12px;
  }
`;