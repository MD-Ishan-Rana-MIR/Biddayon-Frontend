import React from 'react'
import Banner from './Banner'
import OurCharacter from './OurCharacter'
import PopularCourse from './PopularCourse'
import OurMission from './OurMission'
import ToJoinUs from './ToJoinUs'
import StudentSuccesStory from './StudentSuccesStory'
import OurStatic from './OurStatic'

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner></Banner>
      <OurCharacter />
      <PopularCourse />
      <OurMission />
      <ToJoinUs></ToJoinUs>
      <StudentSuccesStory></StudentSuccesStory>
      <OurStatic/>
    </div>
  )
}

export default HomePage