import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)
    const changeTheme = ()=>{
        if(theme == 'light'){
            setTheme('dark')
        }
        else if (theme == 'dark') {
            setTheme('light')
        }
    }
  return (
    <div>
        <button onClick={changeTheme}>change theme {theme}</button>
    </div>
  )
}

export default Button