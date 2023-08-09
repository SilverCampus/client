import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import './style/font.css';
import AppContainer from './components/templates/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
