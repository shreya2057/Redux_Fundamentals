import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment_number, decrement_number } from './redux/actions/operation'
function App() {
  const state = useSelector((state)=>state.change_number)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <div>
          <h1>Increment and Decrement Counter</h1>
          <button title='Decrement' onClick={()=>dispatch(decrement_number(2))}><span>-</span></button>
          <input name='quantity' type='text' value={state}/>
          <button title='Increment' onClick={()=>dispatch(increment_number(2))}><span>+</span></button>
        </div>
      </div>
    </>
  )
}

export default App
