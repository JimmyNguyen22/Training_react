// rxreducer
const initialState = {
  burger: [
    { id: "salad", price: 10, quantity: 2 },
    { id: "cheese", price: 5, quantity: 1 },
    { id: "beef", price: 20, quantity: 1 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_TOPPING": {
      // B1 : lấy dữ liệu từ payload ra
      const { id, quantity } = payload;
      // B2: clone state.burger
      let burgerUpdate = [...state.burger];
      let item = burgerUpdate.find((doVat) => doVat.id === id);
      if (item) {
        item.quantity += quantity;
        if (item.quantity === 0) {
          alert("số lượng tối thiểu 1");
          item.quantity = 1;
        }
      }
      // update lại state
      state.burger = burgerUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
