import TodoItem from './TodoItem';
import ManageTask from './ManageTask'


function ToDoList(props) {
  const { listId, todos, input, updateTodos, updateInput} = props
  
     const handleAddTodo = () => {
      const trimmedInput = input.trim();

        if(trimmedInput !== '') {
          const alreadyAdded = todos.some(
            (task) => task.text.toLowerCase() === trimmedInput.toLowerCase()
          );

          if(alreadyAdded) {
            alert ("Already added item!")
            updateInput(listId, '')
          } else {
            updateTodos(listId, [...todos, {text: input, completed: false}])
            updateInput(listId, '');
          }
        }
    };

    const toggleComplete = (index) => {
        const updated = todos.map((todo, i) => i === index ? {...todo, completed: !todo.completed } : todo);
        updateTodos(listId, updated)
    }

    const deleteTodo = (index) => {
        const filtered = todos.filter((_, i) => i !== index);
        updateTodos(listId, filtered)
    }

    const clearTodos = () => {
      updateTodos(listId, []);
    }

    const handleUpdateTodo = (index, newText) => {
      const updated = todos.map((todo, i) => 
        i === index ? {...todo, text: newText} : todo
      );
      updateTodos(listId, updated);
    }

  
  return (
    <div className='task-list'>

    <ManageTask 
  input={input}
  setInput={(value) => updateInput(listId, value)}
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
        onUpdate={(newText) => handleUpdateTodo(index, newText)}
        onToggle={() => toggleComplete(index)}
        onDelete={() => deleteTodo(index)}
      />
    ))}
  </ul>
</div>
  )
}
export default ToDoList