import React from 'react'
import './style.css';
import { Todo } from './model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}:Props) => {
  // console.log(todos)

  return (
    <div className='todos'>
      {todos.map(todo => (
        <SingleTodo 
        todo={todo}
        todos={todos}
        key={todo.id}
        setTodos={setTodos} 
        />
      ))}
    </div>
  )
}

export default TodoList
