import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "../Authentication/Reducer";
import restaurantReducer from "../Customers/Restaurant/Reducer";
import menuItemReducer from "../Customers/Menu/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuItemReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
