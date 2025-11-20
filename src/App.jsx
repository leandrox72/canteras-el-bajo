import { Route, Routes } from 'react-router'
import { HomePage, ProductsPage, AboutPage, ContactPage } from './pages'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route 
          path='/'
          element={<HomePage />}
        />
        <Route 
          path='/nosotros'
          element={<AboutPage />}
        /> 
        <Route 
          path='/productos'
          element={<ProductsPage />}
        />
        <Route 
          path='/contacto'
          element={<ContactPage />}
        />
      </Routes>
    </div>
  )
}

export default App
