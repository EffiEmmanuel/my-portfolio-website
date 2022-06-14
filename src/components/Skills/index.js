import './index.css'
import React from 'react'
import SkillCard from '../SkillCard'
import { Link } from 'react-router-dom'
// import '../Home/index.css'

function Skills() {
  return (
    <div className='skills container mt-5'>
      <div className='resume'>
        <h2>Frontend</h2>
        <a href='../../assets/cv/My Resume.pdf' className='cta-links hire resume-btn' download>My resume</a>
        {/* <div className='social d-flex justify-content-between my-4'>
          <a target='_blank' href='https://www.linkedin.com/in/emmanuel-effi/' className='cta-links learn'>LinkedIn</a>
          <a target='_blank' href='https://github.com/EffiEmmanuel' className='cta-links learn'>Github</a>
          <a target='_blank' href='https://twitter.com/effi_dev' className='cta-links learn'>Twitter</a>
        </div> */}
      </div>

      <div className='row'>
        <SkillCard
          id='figma'
          label='Figma / UI Design'
          value={80}
        />
        <SkillCard
          id='html'
          label='HTML'
          value={90}
        />
        <SkillCard
          id='css'
          label='CSS'
          value={80}
        />
        <SkillCard
          id='javascript'
          label='JavaScript'
          value={60}
        />

        <SkillCard
          id='react'
          label='Reactjs'
          value={60}
        />

        <SkillCard
          id='bootstrap'
          label='Bootstrap'
          value={50}
        />
      </div>

      <div className='row mt-5'>
        <h2>Backend</h2>
        <SkillCard
          id='nodejs'
          label='Nodejs'
          value={90}
        />

        <SkillCard
          id='express'
          label='Expressjs'
          value={85}
        />

        <SkillCard
          id='mongodb'
          label='MongoDB'
          value={85}
        />

        <SkillCard
          id='php'
          label='PHP'
          value={40}
        />

        <SkillCard
          id='mysql'
          label='MySQL'
          value={40}
        />
      </div>

      <div className='row mt-5'>
        <h2>Others</h2>
        <SkillCard
          id='gitandgithub'
          label='Git & GitHub'
          value={70}
        />

      </div>

    </div>
    // </div >
  )
}

export default Skills