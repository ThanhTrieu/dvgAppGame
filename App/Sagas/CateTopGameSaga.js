import { call, put } from 'redux-saga/effects'
import CateGameActions from '../Redux/CatTopGameRedux'


export function * getDataTopCateGameBySlug (api, payload) {
  const slug = payload.slug
  // make the call to the api
  const response = yield call(api.getTopCateDataGame, slug)
  if(response.ok){
    yield put(CateGameActions.getDataSuccessCats(response.data))
  } else {
    yield put(CateGameActions.getDataFailCats('WRONG'))
  }
}