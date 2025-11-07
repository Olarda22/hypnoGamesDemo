import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  overflow: hidden;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(58, 1, 45, 0.9);
  border: none;
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10000;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(84, 17, 56, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    top: 12px;
    left: 12px;
    font-size: 14px;
    padding: 10px 16px;
  }
`;

export const GameIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`;