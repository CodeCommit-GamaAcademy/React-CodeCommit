import React, { useEffect } from 'react';
import Routes from './routes';

import { checkIsAuth } from './services/getIsAuth';
import updateReduxState from './services/updateReduxState';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  useEffect( () => {
    checkIsAuth();
    updateReduxState();
  }, []);

  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
