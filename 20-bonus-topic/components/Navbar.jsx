import React from 'react'

const Navbar = (props) => {

    function changeTheme (){
        props.setTheme('Dark');
    }

  return (
    <div>
        <p></p>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar