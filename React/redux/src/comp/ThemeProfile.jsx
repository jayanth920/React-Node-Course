import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../state/slices/themeSlice'
import { login, logout } from '../state/slices/profileSlice'


function ThemeProfile() {
    const currcolor = useSelector((state) => state.theme.value)
    const user = useSelector((state) => state.profile.value)
    const dispatch = useDispatch()

    const[color,setColor] = useState("")
    const[name,setName] = useState("")
    const[age,setAge] = useState("")


    function setProfile() {

    }

  return (
    <div>
        <h1>PROFILE</h1>
        <h2>NAME : {user.name}</h2>
        <h2>AGE : {user.age}</h2>
        <input type="text" placeholder="NAME......" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="AGE......" onChange={(e) => setAge(e.target.value)}/>
        <button onClick={() => {
          dispatch(login({name: name, age: age}));
        }}>CLICK ME!!!!!!!!</button>



        <div style={{color : color}}>Color : {color}</div>
        <input  onChange={(e) => { 
          dispatch(changeTheme(e.target.value))
          setColor(e.target.value);
          }}></input>
    </div>
  )
}

export default ThemeProfile