import { createSelector } from 'reselect'

const appDataSelector = state => state.detailNews

const detailNewsSelector = () =>
  createSelector (appDataSelector,subState => subState.data)

const loadingDetailNews = () =>
  createSelector(appDataSelector,subState => subState.loadingDetail)

export {
  detailNewsSelector,
  loadingDetailNews
}