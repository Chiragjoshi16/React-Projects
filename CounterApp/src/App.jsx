import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  let add = () => {
    if(counter<100)
    setCounter(counter + 1)
  }
  let sub = () => {
    if(counter>1)
    setCounter(counter - 1)
  }
    
  return (
    <>
      <h1>Counter App</h1>
      <br/>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      <br/>
      <br/>
      <button onClick={sub}>-</button>
    </>
  )
}

export default App


