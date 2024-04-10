// import { MouseEventHandler, useState } from "react";
// import "./App.css";
// import useCounter from "./hooks/useCounter";
// import React from "react";

// function App() {

//   const [count, increment, decrement, reset] = useCounter();

//   return (
//     <div className="App">
//       <div className="counterContainer">
//         Counter: {String(count)}
//         <button onClick={increment as MouseEventHandler<HTMLButtonElement>}>Add</button>
//         <button onClick={decrement as MouseEventHandler<HTMLButtonElement>}>Subtract</button>
//         <button onClick={reset as MouseEventHandler<HTMLButtonElement>}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import useFetch from './hooks/useFetch';
import { useState } from 'react';

const FetchData = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  const handleButtonClick = () => {
    setDebouncedTerm(term); // Update debounced term when button is clicked
  };

  const url = `http://api.weatherapi.com/v1/current.json?key=31456b301eb5447e9e062613242303&q=${debouncedTerm}&aqi=yes`;
  const { isLoading, isError, data: user } = useFetch(url);

  console.log(user);

  return (
    <div className='border-4 border-green-500 bg-amber-300'>
      <input type="text" onChange={(e) => setTerm(e.target.value)} />

      <button onClick={handleButtonClick}>Fetch Data</button>

      {(user as any)?.location.name}
    </div>
  );
};

export default FetchData;
