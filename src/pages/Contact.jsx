import React from 'react'
import { Container, Contact as ContactComponent } from '../components'

const Contact = () => {
  return (
    <div className='bg-primary-bg-light dark:bg-primary-bg-dark'>
        <Container>
            <ContactComponent />
        </Container>
    </div>
  )
}

export default Contact