import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDataRequestTags: ['idGroupBox','limit'],
  getDataSuccessTags: ['data'],
  getDataFailTags: ['error']
})

export const getTopGameByTagTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingTagGame: false,
  errorTagGame: false,
  data: null
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ fetchingTagGame: true })

// getDataSuccess
export const successData = (state, { data }) =>
  state.merge({ fetchingTagGame: false, errorTagGame: null, data })

// getDataFail
export const failData = (state, {errorTagGame}) => 
  state.merge({ fetchingTagGame: false, errorTagGame })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA_REQUEST_TAGS]: requestData,
  [Types.GET_DATA_SUCCESS_TAGS]: successData,
  [Types.GET_DATA_FAIL_TAGS]: failData
})

