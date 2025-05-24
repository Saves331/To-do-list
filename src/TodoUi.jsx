import { useEffect, useState, useRef } from 'react';
import TodoItem from './components/TodoItem';
import ManageTask from './components/ManageTask'


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
    <div className='main' style={{ 
        padding: '2rem', 
        margin: 'auto', 
        zoom: '2',
    }}>
  <h1>To-Do List</h1>


<div className='task-list'>

    <ManageTask 
  input={input}
  setInput={setInput}
  handleAddTodo={handleAddTodo}
  clearTodos={clearTodos}
/>

   <hr />
   <h4>Tasks</h4>
   

  <ul className='task-wrapper'>
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

</div>

  )
}
export default TodoUi