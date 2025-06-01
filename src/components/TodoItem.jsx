import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TodoItem(props) {
  const { todo, onToggle, onDelete, onUpdate } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onUpdate(editText);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    onUpdate(editText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}
          autoFocus
          style={{
            flex: 1,
            marginRight: '1rem',
            padding: '0.3rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      ) : (
        <span
          onClick={onToggle}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            marginRight: '1rem',
            maxWidth: '80%',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            fontSize: '1.2rem'
          }}
        >
          {todo.text}
        </span>
      )}

      <div className='icons'>
        <FaEdit
          onClick={() => setIsEditing(true)}
          style={{
            cursor: 'pointer',
            color: 'white',
            marginLeft: '0.5rem',
          }}
          title="Edit"
        />
        <FaTrash
          onClick={onDelete}
          style={{
            cursor: 'pointer',
            color: 'red',
            marginLeft: '0.5rem',
          }}
          title="Delete"
        />
      </div>
    </li>
  );
}

export default TodoItem;