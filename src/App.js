import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './Routes'
import { GlobalProvider } from './contexts/Global';


function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Routes />
    </GlobalProvider>
  );
}

export default App;
