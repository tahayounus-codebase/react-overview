import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
      <img src={props.img} className= 'h-full w-full object-cover' alt="" />
     <RightCardContent tag={props.tag}  intro={props.intro} id={props.id}/>
    </div>
  )
}

export default RightCard
