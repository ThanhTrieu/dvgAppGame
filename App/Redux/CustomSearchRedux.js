import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['keyword'],
  searchSuccess: ['data'],
  searchFail: ['error'],
  cancelSearch: null
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searching: false,
  errorSearch: false,
  data: null
})

/* ------------- Reducers ------------- */

// getDataRequest
export const requestData = (state) => state.merge({ searching: true })

export const performSearch = (state, { data }) => 
  state.merge({ searching: false, data: data })

export const requestSearchFail = (state) =>
  state.merge({searching: false, errorSearch: true})


export const cancelSearch = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: requestData,
  [Types.SEARCH_SUCCESS]: performSearch,
  [Types.SEARCH_FAIL]: requestSearchFail,
  [Types.CANCEL_SEARCH]: cancelSearch
})
