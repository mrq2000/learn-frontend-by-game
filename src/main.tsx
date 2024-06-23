import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@/components/theme-provider"

import App from './App.tsx'
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
      preventDuplicate={true}
      autoHideDuration={4000}
      maxSnack={2}
    >
      <BrowserRouter basename={'/'}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>,
)
