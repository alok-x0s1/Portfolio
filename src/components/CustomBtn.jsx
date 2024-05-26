import React from 'react'

const CustomBtn = ({name, classname = ""}) => {
  return (
    <div className='relative group cursor-pointer'>
      <div className={`bg-secondary-color-light dark:bg-secondary-color-dark px-3 py-[6px] rounded-[4px] ${classname}`}>{name}</div>
      <div className={`absolute top-0 left-0 bg-primary-bg-light dark:bg-primary-bg-dark px-3 border-2 border-secondary-color-light dark:border-secondary-color-dark text-secondary-color-light dark:text-secondary-color-dark py-[6px] rounded-[4px] ${classname} group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500`}>{name}</div>
    </div>
  )
}

export default CustomBtn