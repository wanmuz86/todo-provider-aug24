import React, { useState } from 'react'
import { useTodo } from '../lib/TodoContext';
const Add = () => {
    const [text,setText] = useState('');
    const {dispatch} = useTodo();

    const addTodo = () => {
        if ( text.length > 0){
      
            dispatch({type:'ADD_TODO', payload:{id:Date.now(), name:text}});
            setText('') // Clean back the input
        }

    }
  return (
    <div>
        <h2>Add new Todo</h2>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={addTodo}>Add To do</button>
        </div>
  )
}

export default Add