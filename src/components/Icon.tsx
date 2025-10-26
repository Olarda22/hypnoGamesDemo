
import React from 'react';
import styled from "styled-components";


interface BurgerIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({
  width = 34,
  height = 22,
  color = '#D9D9D9',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="34" height="4" rx="2" fill={color} />
      <rect x="10.8799" y="9" width="23.12" height="4" rx="2" fill={color} />
      <rect y="18" width="34" height="4" rx="2" fill={color} />
    </svg>
  );
};

export const CloseBurgerIcon: React.FC<BurgerIconProps> = ({
  width = 28,
  height = 28,
  color = '#D9D9D9',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="-0.43457" y="23.6066" width="34" height="4" rx="2" transform="rotate(-45 -0.43457 23.6066)" fill="#D9D9D9" />
      <rect x="2.82812" y="3.8147e-06" width="34" height="4" rx="2" transform="rotate(45 2.82812 3.8147e-06)" fill="#D9D9D9" />
    </svg>
  );
};
export interface IconProps {
  className?: string;
}

const IconWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;

  svg path {
    fill: #3a012d;
    transition: fill 0.3s ease;
  }

  &:hover svg path {
    fill: #e63946; /* 👈 новый цвет при hover */
  }
`;

export const CarouseLeftButtonIcon: React.FC<IconProps> = () => {
  return (
    <IconWrapper>
      <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M45.4702 59.9805C48.4683 59.9805 51.2165 58.3803 52.7155 55.7743L65.0711 34.2176C66.5928 31.5888 66.5928 28.4113 65.0711 25.7824L52.7155 4.22573C51.2165 1.61973 48.4683 0.0195474 45.4702 0.0195468L20.7363 0.0195425C17.7383 0.019542 14.9901 1.61972 13.491 4.22572L1.13545 25.7824C-0.386288 28.4113 -0.386289 31.5888 1.13545 34.2176L13.491 55.7743C14.9901 58.3803 17.7383 59.9805 20.7363 59.9805L45.4702 59.9805ZM41.0413 49.2364C42.9718 49.2364 44.7207 48.2077 45.6973 46.539L53.624 32.7089C54.5779 31.0173 54.5779 28.9828 53.624 27.2911L45.6973 13.461C44.7207 11.7923 42.9718 10.7636 41.0413 10.7636L25.1653 10.7636C23.2347 10.7636 21.4858 11.7923 20.5092 13.461L12.5825 27.2911C11.6286 28.9828 11.6286 31.0173 12.5825 32.7089L20.5092 46.539C21.4858 48.2077 23.2347 49.2364 25.1653 49.2364L41.0413 49.2364Z" fill="#3A012D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M25.8013 30.24C25.8013 30.6744 25.9148 31.1316 26.142 31.543L31.7292 41.3498C32.4333 42.5614 34.0232 42.9957 35.2497 42.2871C36.4534 41.5784 36.885 40.0011 36.1809 38.7667L31.3204 30.24L36.1809 21.6905C36.885 20.4561 36.4534 18.8788 35.2497 18.1701C34.0232 17.4615 32.4333 17.8958 31.7292 19.1302L26.142 28.9142C25.9148 29.3256 25.8013 29.7828 25.8013 30.24Z" fill="#3A012D" />
      </svg>
    </IconWrapper>
  );
};

export const CarouseRightButtonIcon: React.FC<IconProps> = () => {
  return (
    <IconWrapper style={{ transform: "scale(-1,1)" }}>
       <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M45.4702 59.9805C48.4683 59.9805 51.2165 58.3803 52.7155 55.7743L65.0711 34.2176C66.5928 31.5888 66.5928 28.4113 65.0711 25.7824L52.7155 4.22573C51.2165 1.61973 48.4683 0.0195474 45.4702 0.0195468L20.7363 0.0195425C17.7383 0.019542 14.9901 1.61972 13.491 4.22572L1.13545 25.7824C-0.386288 28.4113 -0.386289 31.5888 1.13545 34.2176L13.491 55.7743C14.9901 58.3803 17.7383 59.9805 20.7363 59.9805L45.4702 59.9805ZM41.0413 49.2364C42.9718 49.2364 44.7207 48.2077 45.6973 46.539L53.624 32.7089C54.5779 31.0173 54.5779 28.9828 53.624 27.2911L45.6973 13.461C44.7207 11.7923 42.9718 10.7636 41.0413 10.7636L25.1653 10.7636C23.2347 10.7636 21.4858 11.7923 20.5092 13.461L12.5825 27.2911C11.6286 28.9828 11.6286 31.0173 12.5825 32.7089L20.5092 46.539C21.4858 48.2077 23.2347 49.2364 25.1653 49.2364L41.0413 49.2364Z" fill="#3A012D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M25.8013 30.24C25.8013 30.6744 25.9148 31.1316 26.142 31.543L31.7292 41.3498C32.4333 42.5614 34.0232 42.9957 35.2497 42.2871C36.4534 41.5784 36.885 40.0011 36.1809 38.7667L31.3204 30.24L36.1809 21.6905C36.885 20.4561 36.4534 18.8788 35.2497 18.1701C34.0232 17.4615 32.4333 17.8958 31.7292 19.1302L26.142 28.9142C25.9148 29.3256 25.8013 29.7828 25.8013 30.24Z" fill="#3A012D" />
      </svg>
    </IconWrapper>
  );
};




