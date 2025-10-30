// import 'swiper/css';
import 'swiper/swiper-bundle.css';

import AboutUs from '../components/AboutUs/AboutUs';
import Games from '../components/Games/Games';
import MainSlider from '../components/MainSlider/MainSlider';
import { useScreenSize } from '../utils/useScreenSize';
import MainSliderMobile from '../components/MainSliderMobile/MainSliderMobile';
import { useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';


export default function AboutPage() {
  const { isMobile } = useScreenSize();
  const gamesRef = useRef<HTMLDivElement | null>(null);
  const { setScrollToGames } = useOutletContext<{ setScrollToGames: (scrollFn: (() => void) | null) => void }>();

  const scrollToGames = () => {
    if (gamesRef.current) {
      gamesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (setScrollToGames) {
      setScrollToGames(scrollToGames);
    }
    
    return () => {
      if (setScrollToGames) {
        setScrollToGames(null);
      }
    };
  }, [setScrollToGames]);

  return (
    <>
      {isMobile ? <MainSliderMobile /> : <MainSlider />}
      <AboutUs />
      <div ref={gamesRef}>
        <Games title="Games" />
      </div>
    </>
  );
}
