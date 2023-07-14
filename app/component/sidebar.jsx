import React from 'react'
import Image from 'next/image'
import {Envelope, Twitter, Linkedin, Medium} from '/icons'



const Sidebar = ({data}) => {
    const {name, role, education, contactLinks}=data
    
  return (
    <div className=' bg-black flex flex-col  content-between w-full h-auto
    sm:justify-around sm:w-1/3 sm:fixed sm:h-screen'>
        <div className ='text-white flex flex-col p-10 items-center'>
            <Image  
            priority
            src ='/images/yo_2.jpg' 
            height={300} 
            width={300} 
            alt= 'julian-wan-WNoLnJo7tS8-unsplash.jpg'
            aria-label='julian-wan-WNoLnJo7tS8-unsplash.jpg'
            className='rounded-full h-full mb-6'
            />
            <h1 className='mb-2'>{name}</h1>
              <h2 className='mb-8'>{role}</h2>
            <p className='mb-2'>{education[0]}</p>
              <p className='mb-2'>{education[1]}</p>
            <div className=' text-white text-center mb-4 mt-4 sm:mt-8'>
                <h3 className='mb-2'>CONTACT ME</h3>
                <div className='flex floex-row justify-center gap-2 '>
                <a className='icons-contactme' href={contactLinks[0]} aria-label = {'twitter link'}><Envelope/> {' '}</a>
                <a className='icons-contactme' href={contactLinks[3]} aria-label = {'twitter link'}><Medium /> {' '}</a>
                <a className='icons-contactme' href={contactLinks[2]} aria-label = {'twitter link'}><Linkedin /> {' '}</a>
                <a className='icons-contactme' href={contactLinks[1]} aria-label = {'twitter link'}><Twitter /> {' '}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar