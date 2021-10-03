import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './Routes'

/*
        Users = {
          id;
          name;
          phone;
          enterExits;
        }

        enterExits: [
          {
            id;
            enter;
            exit;
            tasks;
          }
        ]

        tasks: [
          {
            id;
            title;
          }
        ]
      */

function App() {
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
