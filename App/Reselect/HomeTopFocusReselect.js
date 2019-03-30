import { createSelector } from 'reselect'
//import { INITIAL_STATE } from '../Redux/HomeTopFocusRedux'

const appDataSelector = state => state.topGroupBox

//const dataSelector = state => state.topGroupBox.data

//const isLoadingHomeTopFocus = state => state.topGroupBox.fetching

const homeTopFocusSelector = () =>
  createSelector (appDataSelector,subState => subState.data)

const loadingHomeTopFocus = () =>
  createSelector(appDataSelector,subState => subState.fetching)

export {
  //appDataSelector,
  //dataSelector,
  homeTopFocusSelector,
  loadingHomeTopFocus
}