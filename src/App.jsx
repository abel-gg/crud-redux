import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route index path="/" element={<Products />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
