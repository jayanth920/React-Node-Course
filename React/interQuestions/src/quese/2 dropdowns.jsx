
import { useState } from 'react';
import './App.css'

function App() {

  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  
  const [countryName, setCountryName] = useState("")
  const [cityName, setCityName] = useState("")

  const countryChange= (cName) => {
    setCountryName(cName);
    console.log(countryName)
  }


  return (
    <>
      <div>
        <select onChange={(e) => countryChange(e.target.value)}>
          {countries.map((item, index) =>{
              return (
              <option key={index} value={item.name}>
                {item.name}
              </option>)
          })
        }
        </select>
        {countryName && 
        // <select value={cityName} onChange={(e) => setCityName(e.target.value)}>
        <select>
          {countries.find((country) => country.name == countryName ).cities.map((item,index)=>{
            return (<option key={index} value={item}>{item} </option>)
          })}
        </select>}
      </div>
    </>
  );
}

export default App
