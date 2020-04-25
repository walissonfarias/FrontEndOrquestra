import React from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack'

import App from './App'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
      <SnackbarProvider 
        maxSnack={3} 
        preventDuplicate={true} 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <App />
      </SnackbarProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
