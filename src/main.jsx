import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './component/Routes.jsx'
import AuthProvider from './component/Provider/AuthProvider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
)
