import { createStore, combineReducers } from "redux";
import burgerReducer from "./reducers/burgerReducer";
import { commentReducer } from "./reducers/commentReducer";
import { imgCarReducers } from "./reducers/imgCarReducers";
import { numberReducers } from "./reducers/numberReducers";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  number: numberReducers,
  stateA: (state = "aaa", action) => {
    return state;
  },
  imgCar: imgCarReducers,
  commentReducer: commentReducer,
  burgerReducer: burgerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
