import { call, put } from 'redux-saga/effects'
import HomeTopGameTagActions from '../Redux/HomeTopGameTagRedux'


export function * getDataHomeTopGameTags (api, payload) {
  const id    = payload.idGroupBox
  const limit = payload.limit
  // make the call to the api
  const response = yield call(api.getTopGameByTag, id, limit)
  if(response.ok){
    yield put(HomeTopGameTagActions.getDataSuccessTags(response.data))
    //console.log(response.data);
  } else {
    yield put(HomeTopGameTagActions.getDataFailTags('WRONG'))
  }
}