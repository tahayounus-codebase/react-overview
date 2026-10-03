import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    console.log(response.data);

    setUserData(response.data)
  }

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading.....</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

  useEffect(function () {
    getData()
  }, [index])

  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
      {/* <button
        onClick={getData}
        className='bg-green-600 text-white px-5 py-2 rounded mb-3 active:scale-95'
      >
        get data
      </button> */}

      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-4 '>
        <button
          className='bg-amber-400 text-black cursor-pointer active:scale-95 text-sm  rounded px-4 py-2 font-semibold'
        onClick={() => {
          if(index > 1){
            setIndex(index-1);
            setUserData([]);
          }
          
        }}
        >
        Previous
      </button>
      <h4>Page {index}</h4>
      <button
        className='bg-amber-400 text-black  cursor-pointer active:scale-95  text-sm rounded px-4 py-2 font-semibold'
        onClick={() => {
          setIndex(index+1);
          setUserData([]);
        }}
      >
        Next
      </button>
    </div>
    </div >
  )
}

export default App