import React from "react"
import { Todo } from "./Todo"

export const TodoList = ({ todos, setTodos, filterTodos, setFilterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            filterTodos={filterTodos}
            setFilterTodos={setFilterTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
