import React, { useEffect } from 'react';
import Routes from './routes';
import { checkIsAuth } from './services/getIsAuth';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  useEffect( () => {
    checkIsAuth();
  }, []);

  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
