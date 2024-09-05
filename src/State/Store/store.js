import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "../Authentication/Reducer";
import restaurantReducer from "../Customers/Restaurant/Reducer";
import menuItemReducer from "../Customers/Menu/Reducer";
import cartReducer from "../Customers/Cart/Reducer";
import { orderReducer } from "../Customers/Orders/order.reducer";
import { ingredientReducer } from "../Admin/Ingredients/Reducer";
import restaurantsOrderReducer from "../Admin/Order/restaurants.order.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuItemReducer,
  cart: cartReducer,
  order: orderReducer,

  // admin
  restaurantsOrder: restaurantsOrderReducer,
  ingredients: ingredientReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
