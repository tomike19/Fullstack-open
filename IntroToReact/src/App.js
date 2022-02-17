import './App.css';
import { useState } from 'react';
// import Task1 from './lesson 1-1.1-2/task1';

const App = () => {
   const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  
  return (
    <div>
    {counter}
    </div>
  );
}

export default App;
