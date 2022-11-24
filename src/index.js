import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'
import SessionContextProvider from './contexts/SessionContext'
import AppContextProvider from './contexts/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SessionContextProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </SessionContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
