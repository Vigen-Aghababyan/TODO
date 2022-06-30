import { combineReducers } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

export const rootReducer = combineReducers({
   todo: todoReducer
})