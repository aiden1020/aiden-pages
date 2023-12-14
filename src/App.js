// App.js
import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';

const theme = createTheme({
  typography: {
    allVariants: {
      fontStyle: 'Agrandir',
      textAlign: 'center',
      textTransform: 'none',
      fontSize: 18,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, path, ...rest } = route;
              return <Route key={index} {...rest} path={path} element={element} />;
            })}
          </Routes>
        </Layout>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
