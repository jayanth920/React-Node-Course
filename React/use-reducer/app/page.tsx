"use client"
import Image from "next/image";
import { useReducer, useState } from "react"

const initialState = { count: 0 }
type myState = {
  count: number
}

type UpdatedAction = {
  type: "increment" | "decrement",
  payload: number
}

type ResetAction = {
  type: "reset"
}

type CounterAction = UpdatedAction | ResetAction

const reducer = (state: myState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }
    case "decrement":
      return { count: state.count - action.payload }
    case "reset":
      return initialState
  }
}


export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [num, setNum] = useState<number>(0)

  type inputProps = React.ChangeEvent<HTMLInputElement>

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center gap-5">
      <h1 className="font-extrabold text-xl ">COUNTER COMPONENT</h1>
      Count: {state.count}
      <input className="bg-white border-[2px] border-stone-600 rounded-lg w-36 px-2" type="text" onChange={(e: inputProps) => {
        const value = e.target.value.trim();
        const parsedValue = parseInt(value)
        setNum(isNaN(parsedValue) ? 0 : parsedValue)
      }} />
      <button className="bg-slate-400 w-20 border rounded-md" onClick={() => dispatch({ type: 'increment', payload: num })}>+</button>
      <button className="bg-slate-400 w-20 border rounded-md" onClick={() => dispatch({ type: 'decrement', payload: num })}>-</button>
      <button className="bg-slate-400 w-20 border rounded-md" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
