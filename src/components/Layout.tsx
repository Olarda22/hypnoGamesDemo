import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { useRef, useCallback } from 'react';

const Main = styled.main`
  min-height: calc(100vh - 185px);
`;

export default function Layout() {
  const scrollToGamesRef = useRef<(() => void) | null>(null);

  const handleScrollToGames = useCallback(() => {
    if (scrollToGamesRef.current) {
      scrollToGamesRef.current();
    }
  }, []);

  const setScrollToGames = useCallback((scrollFn: (() => void) | null) => {
    scrollToGamesRef.current = scrollFn;
  }, []);

  return (
    <>
      <Header onGamesClick={handleScrollToGames} />
      <Main>
        <Outlet context={{ setScrollToGames }} />
      </Main>
      <Footer />
    </>
  );
}
