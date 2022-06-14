import './index.css'
import React from 'react'

function SkillCard({ label, id, value }) {
    return (
        <div className='skill col-lg-4 col-md-6 col-sm-12 g-4'>
            <label htmlFor={`${id}`}>{ label }</label>
            <meter id={`${id}`} min={0} max={100} low={40} high={60} optimum={80} value={value} ></meter>
        </div>
    )
}

export default SkillCard