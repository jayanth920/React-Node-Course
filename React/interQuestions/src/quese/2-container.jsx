import React, { useState } from "react";
import { data } from "./comp/data";
import "./App.css";

const App = () => {
  const [first, setFirst] = useState(data);
  const [second, setSecond] = useState([]);

  const clicked = (id,side) => {
    // Toggle
    if(side === 1){
      const updatedFirst = first.map((item) =>
        item.id === id ? { ...item,checked: !item.checked } : item
      );
      setFirst(updatedFirst);
      console.log(first)
    } else if(side === 2){
      const updatedSecond = second.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSecond(updatedSecond);
    console.log(second)
    }
  };

  const rightClick = () => {
    const checkedItems = first.filter((item) => item.checked == true);
    if(checkedItems.length <= 0) return
    const unCheckedItems = first.filter((item) => item.checked == false);
    const checkedFinal = checkedItems.map((item) => {
      item.checked = false
      return item
    })
    setFirst([...unCheckedItems]);
    setSecond([...second, ...checkedFinal]);
    // console.log("checked :",checkedFinal)
    // console.log("unchecked items :", unCheckedItems)
    // console.log("first: ",first," second :",second)


  };

  const leftClick = () => {
    const checkedItems = second.filter((item) => item.checked == true);
    if(checkedItems.length <= 0) return
    const unCheckedItems = second.filter((item) => item.checked == false);
    const checkedFinal = checkedItems.map((item) => {
      item.checked = false
      return item
    })
    setSecond([...unCheckedItems]);
    setFirst([...first, ...checkedFinal]);
        // console.log("checked :",checkedFinal)
    // console.log("unchecked items :", unCheckedItems)
    // console.log("first: ",first," second :",second)
  };

  return (
    <div className="App">
      <div className="first">
        {first.map((item, index) => (
          <span
            key={index}
            onClick={() => clicked(item.id,1)}
            className={item.checked ? "selected" : ""}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="buttons">
        <button onClick={rightClick}>----{">"}</button>
        <button onClick={leftClick}>{"<"}----</button>
      </div>
      <div className="second">
        {second.map((item, index) => (
          <span
            key={index}
            onClick={() => clicked(item.id,2)}
            className={item.checked ? "selected" : ""}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;


//css
/*
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
button{
  user-select: none;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}


.App {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
button {
  margin: 10px;
  border: 2px solid red;
}

.first,
.second {
  color: black;
  background-color: #fff;
  min-height: 40vh;
  min-width: 40vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

span {
  border: 2px solid black;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}

span:hover {
  background-color: #ddd;
}

 */