import React from 'react'
import Banner from './Banner'
import OurCharacter from './OurCharacter'
import PopularCourse from './PopularCourse'
import OurMission from './OurMission'
import ToJoinUs from './ToJoinUs'

const HomePage : React.FC = () => {
  return (
    <div>
      <Banner></Banner>
      <OurCharacter/>
      <PopularCourse/>
      <OurMission/>
      <ToJoinUs></ToJoinUs>
      
    </div>
  )
}

export default HomePage