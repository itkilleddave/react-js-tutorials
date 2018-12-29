import { applyMiddleware, createStore } from "redux";
import axios from "axios"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

const reducer = function(state=initialState, action) {

  switch(action.type) {
    case "FETCH_USERS_REQUEST" : {
      return {
        ...state, 
        fetching: true
      }
      break
    }
    case "FETCH_USERS_RESPONSE" : {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        users: action.payload
      }
      break
    }
    case "FETCH_USERS_ERROR" : {
      return {...state, 
        fetching: false, 
        error: action.payload
      }
      break
    }
  }
  return state;
}

const middleware = applyMiddleware(thunk, logger())

const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({type: "FETCH_USERS_REQUEST"})
  //axios.get('http://rest.learncode.academy/api/wstern/users')
  axios.get('https://randomuser.me/api/?results=2')
  .then(response => {
      //do something asnyc
      dispatch({type: "FETCH_USERS_RESPONSE", payload: response.data.results})
  })
  .catch(err => {
    dispatch({type: "FETCH_USERS_ERROR", payload: err})
  })
});