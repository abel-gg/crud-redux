import React, { useEffect } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
// Actions de Redux
import { getProductsAction } from '../actions/productsActions'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = () => dispatch(getProductsAction())
    getProducts()
  }, [])

  const products = useSelector((state) => state.products.products)
  const error = useSelector((state) => state.products.error)
  const loading = useSelector((state) => state.products.loading)

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center text-uppercase">
          Hubo un error
        </p>
      ) : null}
      {loading ? <p className="text-center">Cargando...</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? 'No hay productos'
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
    </>
  )
}

export default Products
