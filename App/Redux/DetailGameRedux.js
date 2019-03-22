import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDataRequest: ['idPost'],
  getDataSuccess: ['data'],
  getDataFail: ['error']
})

export const getDetailGameTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  error: false,
  loading: false
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ loading: true })

// getDataSuccess
export const successData = (state, { data }) =>
  state.merge({ loading: false, error: null, data })

// getDataFail
export const failData = (state, {error}) => 
  state.merge({ loading: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA_REQUEST]: requestData,
  [Types.GET_DATA_SUCCESS]: successData,
  [Types.GET_DATA_FAIL]: failData
})

