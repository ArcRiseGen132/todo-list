import React, { useState } from "react";
import { ToDoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
  const [ todos, setTodos ] = useState( [] );

  const addTodo = todo => {
    setTodos( [ ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false } ] );
    // sets the inital state of a todo entry
  };

  const toggleComplete = id => {
    setTodos( todos.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ) );
    //        Maps all todos     Checks the completed state based on id    if Completed, sets it as opposite value  
    //        otherwise keeps it the same as before
  };

  const deleteTodo = id => {
    setTodos( todos.filter( todo => todo.id !== id ) );
    // Removed the todo that matches the id of what was just clicked
  };

  const editTodo = id => {
    setTodos(
      todos.map( ( todo ) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo )
    );
    // Pass in the id, sets the todos by mapping, checks if the todo.id is the same id was passed in, then make a copy
    // of the todo, and sets the todo.isEditing to the opposite current value
    // If not equal, then the original todo value is returned
  };

  const editTask = ( task, id ) => {
    setTodos(
      todos.map( ( todo ) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Finish the tasks!</h1>
      <ToDoForm addTodo={ addTodo } />
      { todos.map( ( todo ) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={ editTask } task={ todo } />
        ) : ( <Todo task={ todo }
          key={ todo.id }
          toggleComplete={ toggleComplete }
          deleteTodo={ deleteTodo }
          editTodo={ editTodo } /> )
      ) ) }
    </div>
  );
};
