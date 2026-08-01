import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      image:'',
      intro:'',
      tag:''
    },
    {
      image:'',
      intro:'',
      tag:''
    }
    
  ]
  return (
    <div className=''>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
