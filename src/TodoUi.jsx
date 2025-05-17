import { useEffect, useState, useRef } from 'react'
import TodoItem from './components/TodoItem'


const TodoUi = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const isInitialLoad = useRef(true);
    
    const handleAddTodo = () => {
      const trimmedInput = input.trim();

        if(trimmedInput !== '') {
          const alreadyAdded = todos.some(
            (task) => task.text.toLowerCase() === trimmedInput.toLowerCase()
          );

          if(alreadyAdded) {
            alert ("Already added item!")
            setInput('')
          } else {
            setTodos([...todos, {text: input, completed: false}])
            setInput('');
          }
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

    const clearTodos = () => {
      setTodos([]);
    }


    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        console.log('Loaded from localStorage:', storedTodos);
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])


 useEffect(() => {

    if (isInitialLoad.current) {
        isInitialLoad.current = false;
        return;
    }
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Saved to localStorage:', todos);
    }, [todos])

   

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
  <h1>To-Do List</h1>

  <input
    type="text"
    placeholder="Add a new task..."
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    }}
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button onClick={handleAddTodo}>Add</button>
  <button onClick={clearTodos}>Clear Tasks</button>

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