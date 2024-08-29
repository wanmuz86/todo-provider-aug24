import React from 'react'
import TodoDetail from './TodoDetail'
import { useTodo } from '../lib/TodoContext'
const TodoList = () => {

    const { state } = useTodo();
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {
                    state.todos.map(val => {
                        <li key={val.id}><TodoDetail todo={val}/></li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList