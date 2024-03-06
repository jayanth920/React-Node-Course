import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {

  const [count, increment, decrement, reset] = useCounter()

  return (
    <div className="App">
      <div className="counterContainer">
        Counter: {count}
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Subtract</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
