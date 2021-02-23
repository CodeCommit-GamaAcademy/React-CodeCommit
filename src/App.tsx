import React, { useEffect } from 'react';
import Routes from './routes';

import { checkIsAuth } from './services/getIsAuth';
import updateReduxState from './services/updateReduxState';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

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
      <ToastContainer />
    </>
  );
}

export default App;
