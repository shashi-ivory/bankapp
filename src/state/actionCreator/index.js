export const depositMoney = (payload) => {
  console.log("jgjhgjhgjgg");
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload,
    });
  };
};
export const withdrawMoney = (payload) => {
  console.log("jhgjgg");

  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload,
    });
  };
};
