import React from "react"

export const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: !element.completed }
        }
        return element
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check" />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  )
}

export default Todo
