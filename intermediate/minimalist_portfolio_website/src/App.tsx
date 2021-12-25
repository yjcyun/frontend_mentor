import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import PortfolioDetailPage from './pages/PortfolioDetail';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='portfolio' element={<PortfolioPage />} />
        <Route
          path='portfolio/:portfolioId'
          element={<PortfolioDetailPage />}
        />
      </Routes>
    </>
  );
};

export default App;
