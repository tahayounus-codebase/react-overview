import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" name="" placeholder='Enter Your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App