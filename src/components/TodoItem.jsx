import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

function TodoItem(props) {
    const{todo, onToggle, onDelete} = props;
  return (
    <li style={{marginBottom: '1rem', 
                maxWidth: '', 
                display:'flex', 
                alignItems:'center', 
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                overflow: 'hidden'}}>
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
            maxWidth: '80%'
                }}>

            {todo.text}
        </span>
        <div>
            <FaTrash onClick={onDelete}
                 style={{cursor: 'pointer', color: 'red', marginLeft: '0.5rem', fontSize:'1rem'}}
                 title='Delete'></FaTrash>

            <FaEdit style={{cursor: 'pointer', color: 'white', marginLeft: '0.2rem'}}></FaEdit>

        </div>
            </li>
)}
export default TodoItem