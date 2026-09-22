import React from 'react'
import Section2 from './components/Section2/Section2'
import Section1 from './components/Section1/Section1'

const App = () => {
 const users = [
  {
    img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Professionals',
    color: '#2563EB' // Blue
  },
  {
    img: 'https://images.unsplash.com/photo-1585554414787-09b821c321c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Small Businesses',
    color: '#F59E0B' // Amber
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Entrepreneurs',
    color: '#20B2AA' // Light Sea Green
  },
  {
    img: 'https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Freelancers',
    color: '#8B5CF6' // Violet
  },
  {
    img: 'https://images.unsplash.com/photo-1684327596702-6bbbe1422375?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Investors',
    color: '#EC4899' // Pink
  }
]

  return (
    <div >
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
