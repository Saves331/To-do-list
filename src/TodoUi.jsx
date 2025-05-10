import { useState } from 'react'
import TodoItem from './components/TodoItem'

const TodoUi = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    
    const handleAddTodo = () => {
        if(input.trim() !== '') {
            setTodos([...todos, {text: input, completed: false}]);
            setInput('')
        }
    };

    const toggleComplete = (index) => {
        const updated = todos.map((todo, i) => i === index ? {...todo, completed: !todo.completed } : todo);
        setTodos(updated)
    }

    const deleteTodo = (index) => {
        const filtered = todos.filter((_, i) => i !== index);
        setTodos(filtered)
    }



  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
  <h1>To-Do List</h1>

  <input
    type="text"
    placeholder="Add a new task..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button onClick={handleAddTodo}>Add</button>

  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        onToggle={() => toggleComplete(index)}
        onDelete={() => deleteTodo(index)}
      />
    ))}
  </ul>
</div>

  )
}
export default TodoUi