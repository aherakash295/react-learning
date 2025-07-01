import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="card">
      <h1>Counter App</h1>

      <h3>Counter value: {counter}</h3>
      <div className="wrapper">
        <button type="button" onClick={increment}>
          Increment
        </button>
        <button type="button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
