import { call, put } from 'redux-saga/effects'
import HomeTopFocusActions from '../Redux/HomeTopFocusRedux'


export function * getDataHomeTopFocusGroupBox (api, payload) {
  //console.log(payload)
  const id = payload.idGroupBox
  const limit = payload.limit
  // make the call to the api
  const response = yield call(api.getGroupBox, id, limit)
  console.log(response)
}