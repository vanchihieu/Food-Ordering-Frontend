import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "../Authentication/Reducer";
import restaurantReducer from "../Customers/Restaurant/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
