import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault(); 
    console.log('form submitted');
    
    
  }
  return (
    <div className='h-full lg:flex  bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 gap-4 flex-col p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='px-5 py-2 border-2 font-medium rounded w-full outline-none'
        />

        <textarea 
        type="text"
        placeholder='Write Details'
        className='px-5 h-32 py-2 border-2 font-medium rounded w-full outline-none'
        />
        <button className='bg-white text-black px-5 py-2 font-medium rounded w-full outline-none'>Add Note</button>
      </form>

      <div className=' p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='mt-5 flex flex-wrap gap-5 overflow-auto h-full'>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App