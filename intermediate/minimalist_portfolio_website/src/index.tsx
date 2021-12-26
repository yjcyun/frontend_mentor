import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';
import { ScrollToTop } from './components/ScrollToTop';

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
