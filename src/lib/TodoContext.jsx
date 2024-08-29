
// The same environment, that will be shared between all the components

import { useContext, useReducer } from "react";

const TodoContext = createContext();

// I am creating a function   <TodoProvider>
// {children} refers to the component within it, child, and grandhildren <TodoProvider><App/></TodoProvider>
// All components declared as children will have access to the state and methods defined here
const TodoProvider = ({children}) => {

    // Define the states that going to be shared to the components, within this context

    const initialState = {
        todos:[]
    }

    const todoReducer = (state, action)=>{
        switch (action.type){
            case 'ADD_TODO':

            // spread operator to modify the state object
            // spread operator to add a new todo at the end of array todos
            return {
                ...state,
                todos:[...state.todos, action.payload] //action.payload {id:(timestamp),name:string}
            };

            case 'REMOVE_TODO':

            return  {
                ...state, 
                todos: state.todos.filter(val=>val.id!== action.payload) // action.payload {id:timestamp}
            };

            default: // Default state will be called by TodoList component

            return state
        }
    }

    // Process of exporting the state and the actions 
    // useReducer is used to combine the state and reducer so it can be imported by the component
    // the component will call dispatch if it needs access to todoReducer, and state, for the state

    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        // Process of exporting the coponnet to be <TodoProvider> and linked it the state and dispatch
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
};

// Create and Export a custom hook that perform validation on where it is called, and return dispatch and action if it is called correctly
// Components can access dispatch and action by importing the hook
// THis hook needs to be called within <TodoProvider>
const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}

export {TodoProvider,useTodo}