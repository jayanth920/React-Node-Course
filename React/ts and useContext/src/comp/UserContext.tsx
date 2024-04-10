import React, { createContext, useState, useContext } from 'react'

export type AuthUser = {
    name: string,
    email: string
}

export type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export type UserContextProviderProps = {
    children: React.ReactNode
}
// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export const userContext = () => {
    return useContext(UserContext)
}


