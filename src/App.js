import "./App.css"
import Form from "./components/Form"
import { TodoList } from "./components/TodoList"
import { useEffect, useState } from "react"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState(todos)

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed) === true)
        break
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed) === false)
        break
      default:
        setFilterTodos(todos)
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
      />
    </div>
  )
}

export default App
