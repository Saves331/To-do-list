import { SuspiciousButton } from './components/Button/Button';
import './style/App.css'
import './style/UI.css'
import TodoUI from './TodoUi';



function App() {
  return (
   <div className='container'>
    <TodoUI></TodoUI>
    <SuspiciousButton/>
   </div>
  )
}

export default App;
