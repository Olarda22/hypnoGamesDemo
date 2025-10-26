import type { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.styles";
import { CONTACT_URL, FILE_URL } from "../../utils/const";
import styled from 'styled-components';

interface ButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  label: string;
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  className,
  children,
}) => {
  return (
    <ButtonStyled className={className} onClick={onClick} aria-label={label}>
      {children}
    </ButtonStyled>
  );
};


export const DownloadBtn = styled.button`
  // margin-right: 34px;
  font-weight: 400;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  padding: 3px 12px 3px 12px;
  border-radius: 100px;
  border: none;
  background-color: transparent;
  transition: color 0.2s ease;
  color: #3A012D;
    &:hover {
      color: #fff;
      background-color: #F0554D
    }
   @media (max-width: 767px) {
    display: none;
  }
`;

export const ContactBtn = styled.a`
  // margin-right: 34px;
  font-weight: 400;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  padding: 3px 12px 3px 12px;
  border-radius: 100px;
  border: none;
  background-color: transparent;
  transition: color 0.2s ease;
  color: #3A012D;
    &:hover {
      color: #fff;
      background-color: #F0554D;
    }
`;

export const PresentationButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = FILE_URL;
    link.download = FILE_URL.split('/').pop() || 'file.pdf';
    link.click();
  };

  return (
    <DownloadBtn onClick={handleDownload}>
      Presentation
    </DownloadBtn>
  );
};

export const ContactButton = () => {
  return (
    <ContactBtn  href={CONTACT_URL}
    target="_blank"
    rel="noopener noreferrer">
      Contact
    </ContactBtn>

  );
};


