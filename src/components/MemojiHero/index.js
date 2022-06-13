import './index.css'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

function MemojiHero({ memoji, title, description }) {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <img src={memoji} alt='memoji' className='memoji' />

            <h1>
                <AnimatedLetters letterClass={letterClass} stringArray={title} index={15} />
            </h1>
            <p className='description'>{description}</p>
        </>
    )
}

export default MemojiHero