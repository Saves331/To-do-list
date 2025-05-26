import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TodoItem(props) {
    const{todo, onToggle, onDelete, onUpdate} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const handleEdit = () => setIsEditing(true);

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onUpdate(editText);
            setIsEditing(false);
        }
    }
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

            <FaEdit onClick={() => setIsEditing(true)} style={{cursor: 'pointer', color: 'white', marginLeft: '0.2rem'}}></FaEdit>

        </div>
            </li>
)}
export default TodoItem