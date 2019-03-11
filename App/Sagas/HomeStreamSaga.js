import { call, put } from 'redux-saga/effects'
import HomeStreamActions from '../Redux/HomeStreamRedux'


export function * getDataHomeStreaming (api, payload) {
  const postids = payload.postids
  const time = payload.time
  // make the call to the api
  const response = yield call(api.getDataHomeStream, time, postids)
  if(response.ok){
    yield put(HomeStreamActions.getHomeStreamSuccess(response.data))
    //console.log(response.data);
  } else {
    yield put(HomeStreamActions.getHomeStreamFail('WRONG'))
  }
}