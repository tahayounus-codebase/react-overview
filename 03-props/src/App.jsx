import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      < Card user='Taha' age={18}/>
      < Card user='Muhammad' age={15}/>
    </div>
  )
}

export default App
