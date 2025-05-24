function ManageTask(props) {
  const{input, setInput, handleAddTodo, clearTodos} = props
  return (
     <div className='inputs'>
    <input
    className='input-task-add'
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
  <button className='input-btn' onClick={handleAddTodo}>Add</button>
  <button className='input-btn'onClick={clearTodos}>Clear Tasks</button>

  </div>
  )
}
export default ManageTask