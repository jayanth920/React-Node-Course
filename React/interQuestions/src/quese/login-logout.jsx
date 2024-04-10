
import { useState } from "react";


export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isRegistered, setisRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const loginClick = () => {
    const currUser = users.find((user) => user.username == username && user.password == password);
    console.log("currUser => ",currUser)
    console.log("users => ",users)
    if (!currUser) return;
    setUsers([...users, currUser]);
    setisLoggedIn(true);
  };

  const logoutClick = () => {
    setisLoggedIn(false);
    setisRegistered(false);
  };

  const submitRegister = () => {
    const currUser = { username, password };
    setUsers([...users, currUser]);
    localStorage.setItem("users", JSON.stringify([...users, currUser]));
    setisLoggedIn(true);
  };

  console.log(username)
  console.log(password)

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      {isLoggedIn ? (
        <div>
          <h1>Welcome {username}</h1>
          <button onClick={logoutClick}>Logout</button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{isRegistered ? "Register" : "Login"}</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <input
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button onClick={loginClick}>Login</button>
          <div>
            <button onClick={submitRegister}>Register</button>
          </div>
        </div>
      )}
    </div>
  );
}
