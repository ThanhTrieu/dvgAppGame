import { takeLatest, all, take } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

//import { StartupTypes } from '../Redux/StartupRedux'
//import { GithubTypes } from '../Redux/GithubRedux'
import { getTopPostsInGroupBoxTypes } from '../Redux/HomeTopFocusRedux'
import { getTopGameByTagTypes } from '../Redux/HomeTopGameTagRedux'
/* ------------- Sagas ------------- */

//import { startup } from './StartupSagas'
//import { getUserAvatar } from './GithubSagas'
import { getDataHomeTopFocusGroupBox } from './HomeTopFocusSaga'
import { getDataHomeTopGameTags } from './HomeTopGameTagSaga'

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
  ])
}
