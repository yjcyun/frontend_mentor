import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
