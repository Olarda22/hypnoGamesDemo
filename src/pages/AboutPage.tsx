// import 'swiper/css'; 
import 'swiper/swiper-bundle.css';

import AboutUs from '../components/AboutUs/AboutUs';
import Games from '../components/Games/Games';
import MainSlider from '../components/MainSlider/MainSlider';
import { useScreenSize } from '../utils/useScreenSize';
import MainSliderMobile from '../components/MainSliderMobile/MainSliderMobile';


export default function AboutPage() {
   const { isMobile } = useScreenSize();
  return (
    <>
      {isMobile ? <MainSliderMobile />: <MainSlider />}
      <AboutUs />
      <Games title="Games" />
    </>
  );
}
