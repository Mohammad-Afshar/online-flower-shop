import { combineReducers } from "redux";
import { productsReducers } from "./products/products.reducers";

export const reducers=combineReducers({
    products:productsReducers,
})