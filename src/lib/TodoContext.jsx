
// The same environment, that will be shared between all the components

const TodoContext = createContext();

// I am creating a component <TodoProvider>
// {children} refers to the component within it, child, and grandhildren <TodoProvider><App/></TodoProvider>
// All components declared as children will have access to the state and methods defined here
const TodoProvider = ({children}) => {

    // Define the states that going to be shared to the components, within this context

};

export {TodoProvider}