// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import jwt from 'react-native-jwt-io'

const SERECT_KEY = 'dvg-react-native-v1';
const tokenJwt = jwt.encode(
  {
    iss: 'nguyenthanhtrieu90@gmail.com',
    exp: new Date().getTime() + 3600, // expiration date, required, in ms, absolute to 1/1/1970
    additional: 'payload',
  },
  SERECT_KEY
)

//console.log(tokenJwt);

// our "constructor"
// http://10.0.2.2:8000/api/v1/
const create = (baseURL = 'http://10.0.2.2:8000/api/v1/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'Authorization': tokenJwt
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  //const getRoot = () => api.get('')
  //const getRate = () => api.get('rate_limit')
  //const getUser = (username) => api.get('search/users', {q: username}),
  const getGroupBox = (id, limit) => api.get('group-box-data', {id : id, limit : limit}) 
  const getTopGameByTag = (id, limit) => api.get('top-tag-game', {id : id, limit : limit}) 
  const getDataHomeStream = (time, postids) => api.get('home-stream-game', {time: time, postids: postids})
  const getDataDetailGame = (idPost) => api.get('detail-game', {idPost: idPost})
  const getTopCateDataGame = (slug) => api.get('top-cate-game',{slug: slug})
  const searchDataGame = (keyword) => api.get('search-game',{keyword: keyword})

  //const getGroupBox = (id,key) => api.get('weather', {q : id, key: key}) 
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    //getRoot,
    //getRate,
    //getUser,
    getGroupBox,
    getTopGameByTag,
    getDataHomeStream,
    getDataDetailGame,
    getTopCateDataGame,
    searchDataGame
  }
}

// let's return back our create method as the default.
export default {
  create
}
