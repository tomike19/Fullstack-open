import './App.css'
import { useState } from 'react'
// import Task1 from './lesson 1-1.1-2/task1';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
    </div>
  )
}

export default App
