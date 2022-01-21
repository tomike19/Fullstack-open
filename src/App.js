import './App.css';

const App = () => {
  const now = new Date();
  const a =10;
  const b= 30;
  return (
    <div>
    <p>hello world, it is {now.toDateString()}</p>
    </div>
  );
}

export default App;
