import './App.css'
import {useEffect,useState} from "react"



export default function App() {
  const [payload, setPayload] = useState<{ results: unknown[] } | null>(null)
  const [search, setSearch] = useState("")
  const [list, setList] = useState<{ name: string }[] | null>(null)


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10")
      .then(res => res.json())
      .then(dat => setPayload(dat))
    console.log(payload?.results)
  }, [])
  
  return (
    <div className='App'>
      <input onChange={(e) => e.target.value} />
      {/* {JSON.stringify(payload)} */}
      {list && list?.map((item, index) => <li id={index.toString()}>{item.name}</li>)}
      WORKING
    </div>
  )
}