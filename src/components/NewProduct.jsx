import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// Actions de Redux
import { createNewProductAction } from '../actions/productsActions'
import { showAlertAction, hideAlertAction } from '../actions/alertActions'

const NewProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)
  const alert = useSelector((state) => state.alert.alert)

  const addProduct = (product) => dispatch(createNewProductAction(product))

  const submitNewProduct = (e) => {
    e.preventDefault()
    if (name.trim() === '' || price <= 0) {
      const alert = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3',
      }
      dispatch(showAlertAction(alert))
      return
    }

    dispatch(hideAlertAction())

    addProduct({
      name,
      price,
    })

    navigate('/')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Agregar
              </button>
            </form>
            {loading ? <p>Cargando...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center text-uppercase font-weight-bold">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
