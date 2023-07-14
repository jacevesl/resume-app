import React from 'react'
import AboutMe from './component/about-me'
import { aboutMe, skills, professionalData } from '../data/page-data'
import ProfessionalExperience from './component/professional-experience'
const HomePage = () => {
    
  return (
    <div >
        {/* About me */}
        <AboutMe data={aboutMe } skills={skills}/>

        {/* Professional experience  */}
        <ProfessionalExperience data={professionalData} />
    </div>
  )
}

export default HomePage