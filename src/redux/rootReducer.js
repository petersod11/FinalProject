import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer.js";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;