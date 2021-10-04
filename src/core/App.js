import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './Routes'
import { GlobalProvider } from './contexts/Global';
import { CurrentProvider } from './contexts/Current';


function App() {
  return (
    <GlobalProvider>
      <CurrentProvider>
        <CssBaseline />
        <Routes />
      </CurrentProvider>
    </GlobalProvider>
  );
}

export default App;
