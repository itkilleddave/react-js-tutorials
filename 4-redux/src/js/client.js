import { applyMiddleware, createStore } from "redux";

const reducer = function(state={}, action) {

  return state;
}

const middleware = applyMiddleware()

const store = createStore(reducer, 0, middleware);

store.dispatch({type: "INC", payload: 1});