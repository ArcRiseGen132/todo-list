import "./App.css"
import Form from "./components/Form"
import { TodoList } from "./components/TodoList"
import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
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
      />
      <TodoList setTodos={setTodos} />
    </div>
  )
}

export default App
