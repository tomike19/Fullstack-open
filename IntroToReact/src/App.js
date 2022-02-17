import './App.css';
import { useState } from 'react';
// import Task1 from './lesson 1-1.1-2/task1';

const App = () => {
   const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 100),
  //   1000
  // )
  const handleClick =()=> {
    console.log('hello')
  }
  console.log('rendering...', counter)
  return (
    <div>
    {counter}
     <button onClick={handleClick}>
        plus
      </button>
    </div>
  );
}

export default App;
