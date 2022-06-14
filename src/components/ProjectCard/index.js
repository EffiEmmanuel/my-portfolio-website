import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ backgroundImage, title, codeLink, liveLink, classNumber }) {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                className={`project-card col-lg-4 col-md-6 col-sm-12 card${classNumber}`}>
                <div className='overlay'>
                    <div className='project-details'>
                        <h3 style={{color: 'white', fontWeight: 'bold'}} className='project-title'>{title}</h3>
                        {/* <p className='project-description'>Placeholder description</p> */}
                        <a href={codeLink} target='_blank' style={{color: 'white'}} className='cta-links learn' >GitHub</a>
                        <a href={liveLink} target='_blank' className='cta-links hire' >View Live</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard