import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(10);
  // const [username, setusername] = useState('Taha');
  // function changeNum(){
  //    setNum(30);
  //    setusername('Younus'); 
  // }

  const [Num, setNum] = useState(0);

  function increaseNum(){
    setNum(Num+1);
    
  }

  function decreaseNum(){
    setNum(Num-1);
  }

   function jump5Num(){
    setNum(Num+5);
  }

   function backJump5Num(){
    setNum(Num-5);
  }

  return (
    <div>
      {/* <h1>Value of Num is {num}, <br /> Value of User is {username}</h1>
      <button onClick={changeNum}>Click</button> */}
      <h1>{Num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>increase by 5</button>
      <button onClick={backJump5Num}>decrease by 5</button>
    </div>
  )
}

export default App