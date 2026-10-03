import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  useEffect(function(){
    console.log('use effect is running.......');
    
  },[num])

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={()=>{
        let i = 1;
        const interval = setInterval(()=>{
          setNum(i);

          i++;

          if(i>10){
            clearInterval(interval);
          }
        },1000)
      }}>Click</button>
    </div>
  )
}

export default App