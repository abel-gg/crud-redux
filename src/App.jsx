import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import Header from './components/Header'
//Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route index path="/" element={<Products />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
