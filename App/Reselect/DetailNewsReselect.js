import { createSelector } from 'reselect'

const appDataSelectorDetail = state => state.detailNews

const detailNewsSelector = () =>
  createSelector (appDataSelectorDetail,subState => subState.data)

const loadingDetailNews = () =>
  createSelector(appDataSelectorDetail,subState => subState.loadingDetail)

export {
  detailNewsSelector,
  loadingDetailNews
}