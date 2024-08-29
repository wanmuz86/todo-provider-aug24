import React from 'react'
import TodoDetail from './TodoDetail'

const TodoList = () => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                <li><TodoDetail /></li>
                <li><TodoDetail /></li>
                <li><TodoDetail /></li>
            </ul>
        </div>
    )
}

export default TodoList