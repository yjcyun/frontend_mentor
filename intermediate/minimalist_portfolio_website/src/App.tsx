import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
    </>
  );
};

export default App;
