import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [Data, setData] = useState([])

  // Fetch Method
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response);
    
  // }

  // const getData =  async () =>{
  //   const response =  await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //   console.log(response);

  //   const data = await response.json();

  //   console.log(data);
    
    
  // }

  // Axios Methode
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {Data.map(function(elem , idx){

          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App


// two methode for api calling (data receiving) :
// 1. Fetch & 2. Axios