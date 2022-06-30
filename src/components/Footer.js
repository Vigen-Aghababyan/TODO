import { useDispatch, useSelector } from "react-redux"
import { setTodo } from "../redux/todoSlice"

const Footer = () => {
   const dispatch = useDispatch()
   const todos = useSelector(state => state.todo.todos)
   const completed = todos.filter(todo => todo.isPerformed).length

   const deleted = () => {
      dispatch(setTodo(todos.filter(del => !del.isPerformed)))
   }

   return (
      <footer className="Footer">
         {completed}/{todos.length} Completed
         <button onClick={deleted} className="btn">Delete Completed</button>
      </footer>
   )
}
export default Footer