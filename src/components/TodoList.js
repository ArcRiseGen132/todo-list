import React from "react"
import { Todo } from "./Todo"

export const TodoList = ({ setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
    </div>
  )
}

export default TodoList
