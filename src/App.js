import './App.css';

const App = () => {
  const date = new Date();
  const a =10;
  const b= 30;
  return (
    <div>
    <p>hello world, it is {date.toDateString()}</p> 
    <p> {a} + {b} is equal to {a} + {b}</p>
    </div>
  );
}

export default App;
