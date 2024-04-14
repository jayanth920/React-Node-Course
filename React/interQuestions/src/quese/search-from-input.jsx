import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [payload, setPayload] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10")
      .then((res) => res.json())
      .then((dat) => {
        setPayload(dat?.results || []);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPayload = payload.filter(
    (item) => item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <input onChange={handleSearch} />
      <ul>
        {filteredPayload.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
