import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  number: (state = 10, action) => {
    switch (action.type) {
      case "Tang_sl": {
        // B1: lấy giá trị payload từ action gửi lên
        const { payload } = action;
        // B2 : thay dổi state
        state += payload;
        // B3: return về state mới
        return state;
      }
    }
    return state;
  },
  stateA: (state = "aaa", action) => {
    return state;
  },
  imgCar: (state = "./img/black-car.jpg ", action) => {
    switch (action.type) {
      case "CHANGE_COLOR": {
        // B1: lấy dữ liệu gửi lên từ action
        const { payload } = action;
        // B2 : xử lý thay đổi state
        state = payload;
        return state;
      }
      default:
        return state;
    }
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
