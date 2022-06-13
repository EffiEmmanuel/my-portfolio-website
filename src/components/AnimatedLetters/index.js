import './index.css'
import React from 'react'

const AnimatedLetters = ({ letterClass, stringArray, index }) => {
    return (
        <span>
            {stringArray.map((letter, i) => (
                <span key={letter+i} className={`${letterClass} _${i + index}`}>
                    {letter}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters