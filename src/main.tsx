import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack';
import App from './App.tsx'

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
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
