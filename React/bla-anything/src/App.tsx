import { MouseEventHandler, useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import React from "react";

function App() {

  const [count, increment, decrement, reset] = useCounter();

  return (
    <div className="App">
      <div className="counterContainer">
        Counter: {String(count)}
        <button onClick={increment as MouseEventHandler<HTMLButtonElement>}>Add</button>
        <button onClick={decrement as MouseEventHandler<HTMLButtonElement>}>Subtract</button>
        <button onClick={reset as MouseEventHandler<HTMLButtonElement>}>Reset</button>
      </div>
    </div>
  );
}

export default App;
