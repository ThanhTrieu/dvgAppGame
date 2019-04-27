import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDataRequestCats: ['slug'],
  getDataSuccessCats: ['data'],
  getDataFailCats: ['error']
})

export const getTopGameByCatTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingCatGame: false,
  errorCatGame: false,
  data: null
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ fetchingCatGame: true })

// getDataSuccess
export const successData = (state, { data }) =>
  state.merge({ fetchingCatGame: false, errorCatGame: null, data })

// getDataFail
export const failData = (state, {errorCatGame}) => 
  state.merge({ fetchingCatGame: false, errorCatGame })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA_REQUEST_CATS]: requestData,
  [Types.GET_DATA_SUCCESS_CATS]: successData,
  [Types.GET_DATA_FAIL_CATS]: failData
})

