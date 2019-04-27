import { takeLatest, all, take } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

//import { StartupTypes } from '../Redux/StartupRedux'
//import { GithubTypes } from '../Redux/GithubRedux'
import { getTopPostsInGroupBoxTypes } from '../Redux/HomeTopFocusRedux'
import { getTopGameByTagTypes } from '../Redux/HomeTopGameTagRedux'
import { getDataHomeStreamTypes } from '../Redux/HomeStreamRedux'
import { getDetailGameTypes } from '../Redux/DetailGameRedux'
import { getTopGameByCatTypes } from '../Redux/CatTopGameRedux'
import { TemperatureTypes } from '../Redux/CustomSearchRedux'
/* ------------- Sagas ------------- */

//import { startup } from './StartupSagas'
//import { getUserAvatar } from './GithubSagas'
import { getDataHomeTopFocusGroupBox } from './HomeTopFocusSaga'
import { getDataHomeTopGameTags } from './HomeTopGameTagSaga'
import { getDataHomeStreaming } from './HomeStreamSaga'
import { getDataDetailGame } from './DetailGameSaga'
import { getDataTopCateGameBySlug } from './CateTopGameSaga'
import { getDataSearchGameByKeyword } from './CustomSearchSaga'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    //takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    //takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(getTopPostsInGroupBoxTypes.GET_DATA_REQUEST, getDataHomeTopFocusGroupBox, api),
    takeLatest(getTopGameByTagTypes.GET_DATA_REQUEST_TAGS, getDataHomeTopGameTags, api),
    takeLatest(getDataHomeStreamTypes.GET_HOME_STREAM_REQUEST, getDataHomeStreaming, api),
    takeLatest(getDetailGameTypes.GET_DATA_REQUEST_DETAIL, getDataDetailGame, api),
    takeLatest(getTopGameByCatTypes.GET_DATA_REQUEST_CATS, getDataTopCateGameBySlug, api),
    takeLatest(TemperatureTypes.SEARCH, getDataSearchGameByKeyword, api)
  ])
}
