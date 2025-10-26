import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  // padding-top: 160px; /* отступ для фиксированного header */
  min-height: calc(100vh - 185px);
  // margin-bottom: 100px /* отступ для фиксированного footer */
`;

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
        
      </Main>
      <Footer />
    </>
  );
}
