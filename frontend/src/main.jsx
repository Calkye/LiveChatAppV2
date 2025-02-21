import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MessageContextProvider } from './ContextApi/MessagesContextApi.jsx'; 


// Import Pages / Routes
import App from './App.jsx'
import SignUp from './Pages/SignUp.jsx';


const router = createBrowserRouter([ 
  {
    path: '/MainApp', 
    element: (
      <>
        <App />
      </>
    )
  },
  {
    path: '/',
    element: (
      <>
        <SignUp />
      </>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MessageContextProvider>
      <RouterProvider router={router}/>
    </MessageContextProvider>
  </StrictMode>,
)
