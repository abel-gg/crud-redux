import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Actions de Redux
import { createNewProductAction } from '../actions/productsActions'

const NewProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const dispatch = useDispatch()

  const addProduct = (product) => dispatch(createNewProductAction(product))

  const submitNewProduct = (e) => {
    e.preventDefault()
    if (name.trim() === '' || price <= 0) {
      return
    }
    addProduct({
      name,
      price,
    })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={name}
                  onChange={(e) => setName(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
