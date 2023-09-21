import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const addValue = () =>{
    
    setCounter(counter + 1);
  }
  const remValue = () => {
    counter = counter - 1;
    setCounter (counter);
  }

return (
  <>
  <h1>Web of Solutions</h1>
  <h2> Counter : {counter}</h2>
  <br />
  <button onClick={addValue}>Increase value</button>
  <br />
  <button onClick={remValue}>Decrease value</button>
  </>
)
}

export default App
