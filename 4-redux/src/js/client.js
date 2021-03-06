import { applyMiddleware, createStore } from "redux";


const reducer = function(state, action) {
  
  if (action.type === "INC") {
    return state+action.payload
  } 
  if (action.type === "DEC") {
    return state-action.payload
  } 
  if (action.type == "E") {
    throw new Error("Whoops!")
  }
  return state;
}

const logger = (store) => (next) => (action) => {
  console.log("action fired", action)
  // action.payload = 8 // e.g. can override params
  next(action)
}

const error = (store) => (next) => (action) => {
  try {
    next(action)
  } catch (e) {
    console.log("AHHHH!", e)
  }
}

const middleware = applyMiddleware(logger, error)

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
  console.log('store changed', store.getState());
})

//INC
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 10});
//DEC
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "E", payload: 1});