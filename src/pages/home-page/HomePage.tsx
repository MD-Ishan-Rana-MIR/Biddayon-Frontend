import React from 'react'
import Banner from './Banner'
import OurCharacter from './OurCharacter'
import PopularCourse from './PopularCourse'
import OurMission from './OurMission'

const HomePage : React.FC = () => {
  return (
    <div>
      <Banner></Banner>
      <OurCharacter/>
      <PopularCourse/>
      <OurMission/>
    </div>
  )
}

export default HomePage