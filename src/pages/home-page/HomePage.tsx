import React from 'react'
import Banner from './Banner'
import OurCharacter from './OurCharacter'
import PopularCourse from './PopularCourse'

const HomePage : React.FC = () => {
  return (
    <div>
      <Banner></Banner>
      <OurCharacter/>
      <PopularCourse/>
    </div>
  )
}

export default HomePage