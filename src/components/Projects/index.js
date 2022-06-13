import './index.css'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='projects container-fluid'>
      {/* <h2 style={{ color: 'black' }}>Projects🎨</h2> */}
      <div className='row'>
        <div className='project-card col-lg-4'>
          <div className='project-details'>
            <h3 className='project-title'>Placeholder title</h3>
            {/* <p className='project-description'>Placeholder description</p> */}
            <Link to='/' className='cta-links learn' >Code</Link>
            <Link to='/' className='cta-links hire' >View Live</Link>
          </div>
        </div>
        <div className='project-card col-lg-4'>
          <div className='project-details'>
            <h3 className='project-title'>Placeholder title</h3>
            {/* <p className='project-description'>Placeholder description</p> */}
            <Link to='/' className='cta-links learn' >Code</Link>
            <Link to='/' className='cta-links hire' >View Live</Link>
          </div>
        </div>

        <div className='project-card col-lg-4'>
          <div className='project-details'>
            <h3 className='project-title'>Placeholder title</h3>
            {/* <p className='project-description'>Placeholder description</p> */}
            <Link to='/' className='cta-links learn' >Code</Link>
            <Link to='/' className='cta-links hire' >View Live</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects