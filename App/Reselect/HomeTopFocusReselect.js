import { createSelector } from 'reselect'

const appDataSelector = state => state.topGroupBox

const dataSelector = state => state.topGroupBox.data

const isLoadingHomeTopFocus = state => state.topGroupBox.fetching

const homeTopFocusSelector = createSelector (
  dataSelector,
  data => data
)

const loadingHomeTopFocus = createSelector(
  isLoadingHomeTopFocus,
  fetch => fetch
)

export {
  appDataSelector,
  dataSelector,
  homeTopFocusSelector,
  loadingHomeTopFocus
}