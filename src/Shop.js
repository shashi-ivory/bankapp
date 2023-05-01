import React from "react";
import { actionCreators } from "./state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  console.log(actionCreators);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => actions.depositMoney(100)}
      >
        +
      </button>
      Update balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => actions.withdrawMoney(100)}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
