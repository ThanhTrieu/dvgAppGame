import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDataRequest: ['idGroupBox','limit'],
  getDataSuccess: ['data'],
  getDataFail: ['error']
})

export const getTopPostsInGroupBoxTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  error: false,
  fetching: true
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ fetching: false })

// getDataSuccess
export const successData = (state, { data }) => 
  state.merge({ fetching: true, error: null, data })

// getDataFail
export const failData = (state, {error}) => 
  state.merge({ fetching: true, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA_REQUEST]: requestData,
  [Types.GET_DATA_SUCCESS]: successData,
  [Types.GET_DATA_FAIL]: failData
})

