import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTodo } from "../redux/todoSlice"

const Header = () => {

   const [text, setText] = useState('')
   const dispatch = useDispatch()
   const todos = useSelector(state => state.todo.todos)

   const changeText = e => {

      setText(e.target.value)
   }

   const sendTodo = () => {
      if (text) {
         dispatch(setTodo([
            ...todos,
            {
               id: Math.random(),
               text: text,
               isPerformed: false
            }
         ]))
      }
      setText('')
   }

   return (
      <header className="Header">

         <input type="text" value={text} onChange={changeText} placeholder="write a task" />
         <button onClick={sendTodo} className="btn">Add Text</button>

      </header>
   )
}
export default Header