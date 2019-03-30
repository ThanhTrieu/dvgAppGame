import { createSelector } from 'reselect'
//import { INITIAL_STATE } from '../Redux/HomeTopGameTagRedux'

const appTopGameSelector = state => state.topGameTag

//const dataTopGameSelector = state => state.topGameTag.data

//const isLoadingTopGame = state => state.topGameTag.fetchingTagGame

const homeTopGameSelector = () => 
  createSelector (appTopGameSelector, subState => subState.data)

const loadingHomeTopGame = () => 
  createSelector(appTopGameSelector, subState => subState.fetchingTagGame)

export {
  //appTopGameSelector,
  //dataTopGameSelector,
  homeTopGameSelector,
  loadingHomeTopGame
}