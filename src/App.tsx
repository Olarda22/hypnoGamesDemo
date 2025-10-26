import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import GamesPage from './pages/GamesPage';
import GamePage from './pages/GamePage';
import { ScrollToTop } from './utils/ScrollToTop';

function App() {
  return (
     <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="games/:name" element={<GamePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
