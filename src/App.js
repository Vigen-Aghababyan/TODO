import Footer from "./components/Footer"
import Header from "./components/Header"
import TodoList from "./components/todoList"

const App = () => {

  return (
    <div className="App">
      {<h3>TODO LIST</h3>}
      <div className="container">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  )
}
export default App