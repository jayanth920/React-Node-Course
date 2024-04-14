import React, { useState } from "react";

const Comp = ({ numberOfStars = 1 }) => {
  const [active, setActive] = useState()
  
  
  const onHover = (index) => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square, i) => {
      if (i <= index) {
        square.style.backgroundColor = "red";
      }
    });
  };

  const onLeave = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.style.backgroundColor = ""; // Reset background color
    });
  };

  const onClick = () => {
  };

  const divElements = Array.from({ length: numberOfStars }, (_, index) => (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="square"
      key={index}
    />
  ));







  return (
    <div className="Comp">
      {/* Render the JSX elements */}
      {divElements}
      <button onClick={() => console.log(store)}></button>
    </div>
  );
};

export default Comp;
