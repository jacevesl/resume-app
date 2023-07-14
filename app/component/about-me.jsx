import React , {useId} from 'react'
import Skills from './skills'

const AboutMe = ({data, skills}) => {

    const {title, body} = data
    const id = useId()
  return (
    <section>
        <h2 className='mb-8'>{title}</h2>
        {body?.map((element, i) => 
            <p key={`${id}_${i}`} className='mb-6'>{element}</p>
        )}
        <Skills data={skills}/>
    </section>
  )
}

export default AboutMe