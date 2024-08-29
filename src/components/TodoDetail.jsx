import React from 'react'
import { useTodo } from '../lib/TodoContext'
const TodoDetail = ({todo}) => {

    const {dispatch} = useTodo();

    const handleRemove = () => {
        console.log(todo.id)
        dispatch({type:'REMOVE_TODO', payload:todo.id})

    }
  return (
    <div>
        <h3>{todo.name}</h3>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default TodoDetail