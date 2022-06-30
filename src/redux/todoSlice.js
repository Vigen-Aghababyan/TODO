import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   todos: [
      {
         id: Math.random(),
         text: "Hello",
         isPerformed: false
      },
      {
         id: Math.random(),
         text: "By",
         isPerformed: false
      }
   ]
}

const todoSlice = createSlice({
   name: "Todo",
   initialState,
   reducers: {
      setTodo: (state, { payload }) => {
         state.todos = payload
      }
   }
})

export const { setTodo } = todoSlice.actions
export default todoSlice.reducer