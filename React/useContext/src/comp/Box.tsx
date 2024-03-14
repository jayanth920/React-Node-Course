import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {

    const theme = useContext(ThemeContext)

    return (
        <div><h1 style={{color: theme.secondary.main}}>
{theme.primary.main}
        </h1></div>
    )
}

export default Box