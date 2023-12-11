import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

import AppRoutes from './AppRoutes';
import Layout  from './components/Layout';

const theme = createTheme({
  typography: {
    allVariants: {
      fontStyle : 'Agrandir',
      textTransform: 'none',
      fontSize: 18,
    },
  },
});
const App=()=> {
  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element,  ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
    </BrowserRouter>
    </ThemeProvider >

  );
}

export default App;
