import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 flex justify-between items-center px-18 h-[90vh] bg-amber-950'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
