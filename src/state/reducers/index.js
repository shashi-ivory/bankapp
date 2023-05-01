import { combineReducers } from "redux";
import reducer from "./amoutReducer";
const rootReducer = combineReducers({
  amount: reducer,
});
export default rootReducer;
