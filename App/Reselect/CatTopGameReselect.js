import { createSelector } from 'reselect'

const appDataSelectorCate = state => state.cateGame

const cateTopFocusSelector = () =>
  createSelector (appDataSelectorCate,subState => subState.data)

const loadingCateTopFocus = () =>
  createSelector(appDataSelectorCate,subState => subState.fetchingCatGame)

export {
  cateTopFocusSelector,
  loadingCateTopFocus
}