function TodoItem(props) {
    const{todo, onToggle, onDelete} = props;
  return (
    <li style={{marginBottom: '1rem', maxWidth: ''}}>
        <span
        onClick={onToggle}
        style={{
           textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            marginRight: '1rem',
            display: 'inline-block',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            maxWidth: '100%'
                }}>

            {todo.text}
        </span>
        <button onClick={onDelete}>Delete</button>
    </li>
)}
export default TodoItem