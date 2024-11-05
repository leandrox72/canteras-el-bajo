import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage, ProductsPage, AboutPage, ContactPage } from './pages'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/productos',
    element: <ProductsPage />
  },
  {
    path: '/nosotros',
    element: <AboutPage />
  },
  {
    path: '/contacto',
    element: <ContactPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
