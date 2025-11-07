import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, BackButton, GameIframe } from './GamePlayPage.styles';

export default function GamePlayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { gameUrl, gameName } = location.state || {};

  // Если нет данных игры, перенаправляем на главную
  useEffect(() => {
    if (!gameUrl || !gameName) {
      navigate('/games');
    }
  }, [gameUrl, gameName, navigate]);

  // Блокировка прокрутки body при монтировании компонента
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      // Восстанавливаем прокрутку при размонтировании
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  if (!gameUrl || !gameName) {
    return null;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        ← Back
      </BackButton>
      <GameIframe 
        src={gameUrl} 
        title={gameName}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </Container>
  );
}