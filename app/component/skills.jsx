'use client'
import React, { useState } from 'react'
// import { skills } from '../../data/page-data'
const Skills = ({data}) => {
    const [activeTab, setActiveTab] = useState('soft')
    const setBg = (active) => activeTab === active ? 'bg-yellow' : 'bg-grey'
    const setTabsAlignment = (tab) => tab === 'soft' ? 'text-left' : 'text-right'
    const tabs =(
        <div className='flex '>
            {['soft', 'hard'].map((el, index) => (
                <button
                    key={index}
                    type='button'
                    className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
                    onClick={() => setActiveTab(el)}
                > {el} Skills
                </button>
            ))}
        </div>
    )
    const content =(
        <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2
            ${activeTab === 'soft' ? 'justify-start' : 'justify-end'}`}>
            {data[activeTab].map((el) => (
                <li key={el.text} className='skill'>
                    <span>{el.icon}</span>
                    {el.text}</li>

            ))}
        </ul>
    )
    return (
        <div>
            {tabs}
            {content}
        </div>
    )
}

export default Skills