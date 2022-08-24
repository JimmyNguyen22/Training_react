const stateDefault = 10;

export const numberReducers = (state = stateDefault, action) => {
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
};
