import React from 'react'

const Container = ({children}) => {
  return (
    <div
    className='min-h-screen bg-primary-bg-light w-full max-w-8xl mx-auto px-12'
    >{children}</div>
  )
}

export default Container