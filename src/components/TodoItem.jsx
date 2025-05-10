function TodoItem({todo, onToggle, onDelete}) {
  return (
    <li style={{marginBottom: '1rem'}}>
        <span
        onClick={onToggle}
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            marginRight: '1rem'
        }}>

            {todo.text}
        </span>
        <button onClick={onDelete}>Delete</button>
    </li>
)}
export default TodoItem