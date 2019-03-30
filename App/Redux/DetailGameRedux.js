import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDataRequestDetail: ['idPost'],
  getDataSuccessDetail: ['data'],
  getDataFailDetail: ['error']
})

export const getDetailGameTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  error: false,
  loadingDetail: false
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ loadingDetail: true })

// getDataSuccess
export const successData = (state, { data }) =>
  state.merge({ loadingDetail: false, error: null, data })

// getDataFail
export const failData = (state, {error}) => 
  state.merge({ loadingDetail: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA_REQUEST_DETAIL]: requestData,
  [Types.GET_DATA_SUCCESS_DETAIL]: successData,
  [Types.GET_DATA_FAIL_DETAIL]: failData
})

