const initial = {
  amount: 1,
};

const reducer = (state = initial, action) => {
  if (action.type === "deposit") {
    return { ...state, amount: state.amount + action.payload };
  } else if (action.type === "withdraw") {
    return { ...state, amount: state.amount - action.payload };
  } else {
    return state;
  }
};
export default reducer;
