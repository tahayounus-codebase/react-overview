// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState({name:'Taha', age:20});

//   const  btnClicked = () =>{
//     console.log(num.name);
//     console.log(num.age);

//     const newNum = {...num};

//     newNum.name = 'Muhammad';
//     newNum.age = 15;

//     console.log(newNum.name);
//     console.log(newNum.age);
//     setnum(newNum)
    
    
    
//   }
  
//   return (
//     <div>
//       <h1>{num.name}, {num.age}</h1>
      
//       <button onClick={btnClicked}>Click</button>
//       {/* <h1>{newNum.name},{newNum.age}</h1> */}
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10);

  const btnClicked = ()=>{
    setnum(prev =>(prev+1));
    setnum(prev =>(prev+1));
    setnum(prev =>(prev+1));

    console.log(num);
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App