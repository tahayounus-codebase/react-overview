import React from 'react'

const App = () => {
  const btnClicked = ()=>{
    console.log('button is click');
    
  }

  return (
    <div>
      <h1>Hello, Taha  </h1>
      <input type="text" placeholder='enter your name' onChange={function(elem){
        console.log(elem)
      }} name="" id="" />
    </div>
  )
  
}

export default App
