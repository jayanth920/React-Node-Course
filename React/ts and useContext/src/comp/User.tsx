import React, { useContext } from 'react'
import { UserContext, userContext } from './UserContext'

const User = () => {

    // const userContext = useContext(UserContext)


    const {user, setUser } = userContext()

    const handleLogin = () => {
            setUser({
                name: 'Jay',
                email: 'haha@gmail.com'
            })
    }

    const handleLogout = () => {
            setUser(null)
        }

    return (
        <div><h1>USER COMPONENT</h1>
            <div>
                Username is {user?.name} -------------
                Email is {user?.email}
            </div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default User