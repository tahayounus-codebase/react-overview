import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  
  let navigate = useNavigate();

  const btnClick = ()=>{
    navigate('/')
  }

  return (
    <div>
     
      <h1>About</h1>
    </div>
  )
}

export default About