import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('form submitted by', title);
    settitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text"
        placeholder='Enter Your Name'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App