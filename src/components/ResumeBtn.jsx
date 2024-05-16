import React from 'react'

const ResumeBtn = () => {
  return (
    <div className='relative'>
      <div className='bg-secondary-color-light h-8 rounded-sm w-20 p-3'></div>
      <div className='absolute left-0 top-0 hover:-translate-x-2 hover:-translate-y-2 duration-500 cursor-pointer bg-primary-bg-light border-2 rounded-sm border-secondary-color-light px-2 py-1'>Resume</div>
    </div>
  )
}

export default ResumeBtn