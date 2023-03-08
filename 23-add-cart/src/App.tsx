import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import AdminLayout from './layouts/admin-layout'
import SimpleLayout from './layouts/simple-layout'
import Home from './pages/home'
import Login from './pages/login'
import Products from './pages/products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
          </Route>

          <Route element={<SimpleLayout />}>
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
