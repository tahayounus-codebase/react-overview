import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id= 'right' className='h-full overflow-x-auto rounded-4xl p-6 w-2/3 flex flex-nowrap gap-10 '>
      {props.users.map(function(elem,idx){
        return <RightCard color={elem.color}  key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
