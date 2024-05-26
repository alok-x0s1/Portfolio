import React from 'react'
import { Container, About as AboutComponent } from '../components'

const About = () => {
  return (
    <div className='bg-primary-bg-light dark:bg-primary-bg-dark'>
        <Container>
            <AboutComponent />
        </Container>
    </div>
  )
}

export default About