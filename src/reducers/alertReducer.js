import { SHOW_ALERT, HIDE_ALERT } from '../types'

const initialState = {
  alert: null,
}

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      }
    default:
      return state
  }
}
