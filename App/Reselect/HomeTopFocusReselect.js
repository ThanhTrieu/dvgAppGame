import { createSelector } from 'reselect'

const appDataSelector = state => state.topGroupBox

const homeTopFocusSelector = () =>
  createSelector (appDataSelector,subState => subState.data)

const loadingHomeTopFocus = () =>
  createSelector(appDataSelector,subState => subState.fetching)

export {
  homeTopFocusSelector,
  loadingHomeTopFocus
}