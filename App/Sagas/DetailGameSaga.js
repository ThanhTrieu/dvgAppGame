import { call, put } from 'redux-saga/effects'
import DetailGameActions from '../Redux/DetailGameRedux'


export function * getDataDetailGame (api, payload) {
  const id = payload.idPost
  // make the call to the api
  const response = yield call(api.getDataDetailGame, id)
  if(response.ok){
    yield put(DetailGameActions.getDataSuccessDetail(response.data))
  } else {
    yield put(DetailGameActions.getDataFailDetail('WRONG'))
  }
}