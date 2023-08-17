import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import AppContainer from './components/templates/AppContainer';

// export const BaseUrl = 'http://127.0.0.1:8000';
export const BaseUrl = 'http://43.200.8.110';

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
