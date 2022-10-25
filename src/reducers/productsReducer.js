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
} from '../types'

// Cada Reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteProduct: null,
  editProduct: null,
}

export default function producstReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case START_DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      }
    case ADD_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.deleteProduct
        ),
        deleteProduct: null,
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        editProduct: action.payload,
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
        editProduct: null,
      }
    default:
      return state
  }
}
