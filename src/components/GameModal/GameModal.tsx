import { useEffect } from "react";
import type { FC } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  GameIframe,
} from "./GameModal.styles";
import {CloseIcon} from "../Icon";

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameUrl: string;
  gameName: string;
}

export const GameModal: FC<GameModalProps> = ({
  isOpen,
  onClose,
  gameUrl,
  gameName,
}) => {
  // Обработка клавиши Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Блокировка прокрутки body
  useEffect(() => {
    if (isOpen) {
      // Сохраняем текущую позицию прокрутки
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Восстанавливаем прокрутку
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Обработка клика по backdrop
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton
          onClick={onClose}
          aria-label="Закрыть модальное окно"
          type="button"
        >
          <CloseIcon />
        </CloseButton>
        <GameIframe
          src={gameUrl}
          title={gameName}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </ModalContent>
    </ModalOverlay>
  );
};
