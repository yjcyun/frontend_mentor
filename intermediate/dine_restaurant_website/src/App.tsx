import { Route, Routes } from 'react-router-dom';
import BookTablePage from './pages/BookTable';

import HomePage from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book-a-table' element={<BookTablePage />} />
      </Routes>
    </>
  );
};

export default App;
