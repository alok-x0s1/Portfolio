import React from 'react'

const CustomBtn = ({name, classname = ""}) => {
  return (
    <div className='relative group cursor-pointer'>
      <div className={`bg-secondary-color-light px-3 py-[6px] rounded-sm ${classname}`}>{name}</div>
      <div className={`absolute top-0 left-0 bg-primary-bg-light px-3 border-2 border-secondary-color-light text-secondary-color-light py-[6px] rounded-sm ${classname} group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500`}>{name}</div>
    </div>
  )
}

export default CustomBtn