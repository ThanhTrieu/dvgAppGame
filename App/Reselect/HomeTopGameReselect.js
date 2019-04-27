import { createSelector } from 'reselect'

const appTopGameSelector = state => state.topGameTag

const homeTopGameSelector = () => 
  createSelector (appTopGameSelector, subState => subState.data)

const loadingHomeTopGame = () => 
  createSelector(appTopGameSelector, subState => subState.fetchingTagGame)

export {
  homeTopGameSelector,
  loadingHomeTopGame
}