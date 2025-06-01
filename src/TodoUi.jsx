import { useEffect, useState, useRef } from 'react';
import ToDoList from './components/ToDoList';


const TodoUi = () => {

    const [toDoLists, setToDoLists] = useState([
      {id: 1, todos: [], input: ''}, 
      {id: 2, todos: [], input: ''}, 
    ])
   
    const isInitialLoad = useRef(true);
    
 
    const updateTodos = (listId, newTodos) => {
      setToDoLists(prevList => 
        prevList.map(list => list.id === listId ? {...list, todos: newTodos} : list)
      )
    }


    const updateInput = (listId, newInput) => {
      setToDoLists(prevList => 
        prevList.map(list => 
          list.id === listId ? {...list, input: newInput } : list)
      )
    }
    useEffect(() => {
        const storedTodos = localStorage.getItem('todoLists');
        console.log('Loaded from localStorage:', storedTodos);
        if (storedTodos) {
            setToDoLists(JSON.parse(storedTodos))
        }
    }, [])


 useEffect(() => {

    if (isInitialLoad.current) {
        isInitialLoad.current = false;
        return;
    }
        localStorage.setItem('todoLists', JSON.stringify(toDoLists));
        console.log('Saved to localStorage:', toDoLists);
    }, [toDoLists])

   

  return (
    <div className='main' style={{ 
        padding: '2rem', 
        margin: '0, auto', 
        zoom: '1',
    }}>
  <h1 style={{fontSize: '4rem'}}>To-Do List</h1>


    {toDoLists.map(({id, todos, input}) => (
      <ToDoList
      key = {id}
      listId = {id}
      todos = {todos}
      input = {input}
      updateInput = {updateInput}
      updateTodos = {updateTodos}
      ></ToDoList>
    ))}




</div>

  )
}
export default TodoUi