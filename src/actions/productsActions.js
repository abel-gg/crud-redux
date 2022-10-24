import { ADD_PRODUCT, ADD_PRODUCT_EXIT, ADD_PRODUCT_ERROR } from '../types'
import axiosClient from '../config/axios'
import Swal from 'sweetalert2'

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct())

    try {
      await axiosClient.post('/productos', product)
      dispatch(addProductExit(product))
      Swal.fire('Correcto', 'El producto se agregó correctamente', 'success')
    } catch (error) {
      console.log(error)
      dispatch(addProductError(true))
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intentelo de nuevo',
      })
    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
})

const addProductExit = (product) => ({
  type: ADD_PRODUCT_EXIT,
  payload: product,
})

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
})
