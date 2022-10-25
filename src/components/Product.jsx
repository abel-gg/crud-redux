import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import {
  deleteProductAction,
  editProductAction,
} from '../actions/productsActions'

const Product = ({ product }) => {
  const { id, name, price } = product

  const dispatch = useDispatch()

  const navigate = useNavigate()

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

  const redirectEdit = (product) => {
    dispatch(editProductAction(product))
    navigate(`/products/edit/${product.id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redirectEdit(product)}
          className="btn btn-primary mr-2">
          Editar
        </button>
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
