import { useDispatch, useSelector } from "react-redux"
import { setTodo } from "../redux/todoSlice"


const TodoList = () => {

   const dispatch = useDispatch()
   const todos = useSelector(state => state.todo.todos)

   return (
      <div className="List">
         {
            todos.map(todo => {
               return (
                  <div key={todo.id} className="list">
                     <input type="checkbox"
                        checked={todo.isPerformed}
                        onChange={e => dispatch(setTodo(
                           todos.map(newTodo => {
                              if (newTodo.id === todo.id) {
                                 return { ...newTodo, isPerformed: e.target.checked }
                              }
                              return newTodo
                           })
                        ))}
                     />
                     {todo.text}
                     <button onClick={() => {
                        dispatch(setTodo(todos.filter(del => del.id !== todo.id)))
                     }}
                        className="btn">x</button>
                  </div>)
            })
         }
      </div>
   )
}
export default TodoList