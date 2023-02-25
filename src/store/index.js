import { createStore } from "redux";
import { reducers as combineReducers } from "./index.reducer";
export const store=createStore(combineReducers)