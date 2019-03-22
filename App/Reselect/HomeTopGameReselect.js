import { createSelector } from 'reselect'

const appTopGameSelector = state => state.topGameTag

const dataTopGameSelector = state => state.topGameTag.data

const isLoadingTopGame = state => state.topGameTag.fetchingTagGame

const homeTopGameSelector = createSelector (
  dataTopGameSelector,
  data => data
)

const loadingHomeTopGame = createSelector(
  isLoadingTopGame,
  fetchingTagGame => fetchingTagGame
)

export {
  appTopGameSelector,
  dataTopGameSelector,
  homeTopGameSelector,
  loadingHomeTopGame
}