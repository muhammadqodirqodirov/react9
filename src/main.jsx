import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './config/theme';
import App from './App.jsx' 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
     <App />
    <CssBaseline />
   </ThemeProvider>
  </BrowserRouter>
)
