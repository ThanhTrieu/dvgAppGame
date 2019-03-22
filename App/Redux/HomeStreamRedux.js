import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getHomeStreamRequest: ['time','postids'],
  getHomeStreamSuccess: ['data'],
  getHomeStreamFail: ['error']
})

export const getDataHomeStreamTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  error: false,
  fetchingHomeStream: false
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ fetchingHomeStream: true })

// getDataSuccess
export const successData = (state, { data }) =>
  state.merge({ fetchingHomeStream: false, error: null, data })


// getDataFail
export const failData = (state, {error}) => 
  state.merge({ fetchingHomeStream: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_HOME_STREAM_REQUEST]: requestData,
  [Types.GET_HOME_STREAM_SUCCESS]: successData,
  [Types.GET_HOME_STREAM_FAIL]: failData
})

