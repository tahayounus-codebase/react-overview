import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('');
  const [detailed, setdetailed] = useState('')

  const [Task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault(); 
    
    const copyTask = [...Task];

    copyTask.push({title,detailed});
    setTask(copyTask);
    
    settitle('');
    setdetailed('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...Task];
    copyTask.splice(idx)
    setTask(copyTask)
  }


  return (
    <div className='h-full lg:flex  bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 gap-4 flex-col p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* Phele input for heading */}
          <input 
        type="text"
        placeholder='Enter Notes Heading'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
          
        }}
        className='px-5 py-2 border-2 font-medium rounded w-full outline-none'
        />
        {/* Detail wala input */}
        <textarea 
        type="text"
        placeholder='Write Details Here'
        value={detailed}
        onChange={(e)=>{
          setdetailed(e.target.value);
          
        }}
        className='px-5 h-32 py-2 border-2 font-medium rounded w-full outline-none'
        />
        <button className='bg-white text-black px-5 py-2 font-medium rounded w-full outline-none active:bg-gray-400 active:text-white'>Add Note</button>
      </form>

      <div className=' p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='mt-5 flex flex-wrap items-start justify-start gap-5 overflow-auto h-[90%]'>
          {Task.map(function(elem,idx){
            return <div key={idx} className="h-52 flex justify-between flex-col items-start relative w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-1.png')] bg-cover">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.detailed}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full py-1 text-xs rounded font-bold  bg-red-500 active:scale-95 cursor-pointer  text-white'>Delete</button>
            </div>;
          })}
        </div>
      </div>
    </div>
  )
}

export default App