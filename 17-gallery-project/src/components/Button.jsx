import React from 'react'

const Button = () => {
  return (
    <div>
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
    </div>
  )
}

export default Button