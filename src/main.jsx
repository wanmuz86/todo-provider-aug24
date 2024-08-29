
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoProvider } from './lib/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
