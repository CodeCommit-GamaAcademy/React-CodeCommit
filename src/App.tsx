import React, { useEffect } from 'react';
import Routes from './routes';

import { checkIsAuth } from './services/getIsAuth';
import updateState from './services/updateState';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  useEffect( () => {
    checkIsAuth();
    updateState();
  }, []);

  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
