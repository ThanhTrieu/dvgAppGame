import { call, put } from 'redux-saga/effects'
import SearchGameActions from '../Redux/CustomSearchRedux'


export function * getDataSearchGameByKeyword (api, payload) {
  console.log(payload)
  const keyword = payload.keyword
  // make the call to the api
  const response = yield call(api.searchDataGame, keyword)
  console.log(response)
  if(response.ok){
    yield put(SearchGameActions.search({searchTerm: keyword, data: response.data}))
  } else {
    yield put(SearchGameActions.cancelSearch())
  }
}