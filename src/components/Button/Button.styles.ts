import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  display: block;
  background: #3A012D;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #F0554D;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(240, 85, 77, 0.3);
  }

  // &:focus {
  //   outline: 2px solid #F0554D;
  //   outline-offset: 2px;
  // }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1023px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;