import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

type myProps = {
  url: string,
  name: string
}

type datProps = {
  results:myProps[]
}

const App: React.FC = () => {
  const [data, setData] = useState<myProps[] | null>(null)

  const fetchApi = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=10")
        .then((res) => {
          return res.json()
        })
        .then((dat) => {
          setData(dat.results)
        })
}
  // const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([])

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if(todo){
  //     setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
  //     setTodo("")
  //   }
  // }


  // console.log(todos)

  return (
    <div className="App">
      <button onClick={fetchApi}>CLICK ME TO FETCH</button>
      <div>
        {data?.map(item =>
          <h1 key={item.name}>{item.name} = {item.url}</h1>
        )}
      </div>
      {/* <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} /> */}
    </div>
  );
}
export default App;