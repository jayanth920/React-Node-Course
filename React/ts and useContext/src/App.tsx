import React, { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './comp/ThemeContext'
import Box from './comp/Box'
import User from './comp/User'
import { UserContextProvider } from './comp/UserContext'
import MutableRef from './comp/MutableRef'
import { Private } from './comp/Private'
import { Profile } from './comp/Profile'
import { List } from './comp/List'
import { RandomNumber } from './comp/RandomNumber'
import { Toast } from './comp/Toast'
import CustomButton from './comp/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}
      {/* <UserContextProvider>

    <User/>
      </UserContextProvider> */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <List
        items={[
          1, 2, 3
        ]}
        onClick={(item) => console.log(item)} /> */}

      {/* <List
        items={[
          { id:1, firstName: "John", lastName: "Doe" },
          { id:2, firstName: "Jane", lastName: "Smith" },
          { id:3, firstName: "Alice", lastName: "Johnson" }
        ]}
        onClick={(item) => console.log(item)} /> */}
      HELLO WORLD
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position="center"/> */}
      <CustomButton variance="primary" onClick={() => console.log("clicked !")}>
        MyCustom
      </CustomButton>
    </div>
  )
}

export default App
