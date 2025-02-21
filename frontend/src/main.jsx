import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MessageContextProvider } from './ContextApi/MessagesContextApi.jsx'; 

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </StrictMode>,
)
