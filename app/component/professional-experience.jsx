import React from 'react'

const ProfessionalExperience = ({ data }) => {
    const { title, experiences } = data
    // role, description, current
    return (
        <section>
            {/* ProfessionalExperience */}
            <h2 className='mb-6'>{title}</h2>
            <div className='flex flex-col gap-6'>
                {experiences.map((item, index) => (
                    // {role, description, current}=item
                    <div key={index} className='flex flex-col rounded-lg'>
                        <span className={`h-2 ${item.current ? 'bg-green': 'bg-grey'}`}/>
                         <div className='bg-grey-light p-6 drop-shadow-md'>
                            <h3>{item.role}</h3>
                            <p className='mt-2'>{item.description}</p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    )
}

export default ProfessionalExperience