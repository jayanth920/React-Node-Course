import { useState } from "react"


const useCounter = () => {
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount((prev: number) => prev+1)
    }

    const decrement = () => {
        setCount((prev: number) => prev-1)
    }

    const reset = () => {
        setCount((prev: number) => 0)
    }

    

    return [count, increment, decrement, reset]
}

export default useCounter