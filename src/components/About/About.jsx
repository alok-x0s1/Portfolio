import React from 'react'
import {GithubCalendar} from '../index'
import AboutCard from './AboutCard'
import TeckStack from './TeckStack'
import Tools from './Tools'

const About = () => {
  return (
    <div>
      <AboutCard />
      <TeckStack />
      <Tools />
      <GithubCalendar />
    </div>
  )
}

export default About