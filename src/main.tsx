import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@/components/theme-provider"

import App from './App.tsx'
import './index.css';

import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
      autoHideDuration={4000}
      maxSnack={2}
    >
      <HashRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </HashRouter>
    </SnackbarProvider>
  </React.StrictMode>,
)
