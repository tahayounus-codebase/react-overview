import React from 'react'
import LetfContent from './LetfContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-6 px-18  flex gap-10 items-center h-[90vh]'>
      <LetfContent/>
      <RightContent users={props.user}/>
    </div>
  )
}

export default Page1Content
