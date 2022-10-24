import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../actions/productsActions'

const Product = ({ product }) => {
  const { id, name, price } = product

  const dispatch = useDispatch()

  const confirmDeleteProduct = (id) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el producto?',
      text: 'No se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id))
      }
    })
  }
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Product
