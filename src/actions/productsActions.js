import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  START_EDIT_PRODUCT,
} from '../types'
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
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
})

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
})

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts())

    try {
      const response = await axiosClient.get('/productos')
      dispatch(successDownlaodProducts(response.data))
    } catch (error) {
      dispatch(errorDownloadProducts())
    }
  }
}

const downloadProducts = () => ({
  type: START_DOWNLOAD_PRODUCTS,
  payload: true,
})

const successDownlaodProducts = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
})

const errorDownloadProducts = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
})

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id))

    try {
      await axiosClient.delete(`/productos/${id}`)
      dispatch(successDeleteProduct())
      Swal.fire('Correcto', 'Se ha eliminado el producto', 'success')
    } catch (error) {
      dispatch(errorDeleteProduct())
    }
  }
}

const getProductDelete = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
})

const successDeleteProduct = () => ({
  type: DELETE_PRODUCT_SUCCESS,
})

const errorDeleteProduct = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
})

export function editProductAction(product) {
  return (dispatch) => {
    dispatch(getProductEdit(product))
  }
}

const getProductEdit = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
})

export function editNewProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct())

    try {
      await axiosClient.put(`/productos/${product.id}`, product)
      dispatch(editProductSuccess(product))
    } catch (error) {
      console.log(error)
      dispatch(editProductError())
    }
  }
}

const editProduct = () => ({
  type: START_EDIT_PRODUCT,
})

const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
})

const editProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
})
