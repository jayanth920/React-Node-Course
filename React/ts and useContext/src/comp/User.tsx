import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
            userContext.setUser({
                name: 'Jay',
                email: 'haha@gmail.com'
            })
    }

    const handleLogout = () => {
            userContext.setUser(null)
        }

    return (
        <div><h1>USER COMPONENT</h1>
            <div>
                Username is {userContext.user?.name} -------------
                Email is {userContext.user?.email}
            </div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default User