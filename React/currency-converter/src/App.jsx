/* eslint-disable no-unused-vars */
import './App.css';
import {useState} from "react"
import inputBox from './Comp/inputBox'; 
import Swap from "./Comp/Swap"

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  
  return (
    <>
      <h1>Currency Converter</h1>
      <inputBox />
      <Swap/>
      <inputBox /> 
    </>
  );
}

export default App;
