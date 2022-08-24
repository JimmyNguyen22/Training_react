const stateDefault = "./img/black-car.jpg ";

export const imgCarReducers = (state = stateDefault, action) => {
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
};
