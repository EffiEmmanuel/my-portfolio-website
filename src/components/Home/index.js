import './index.css'
import React, { useEffect, useState } from 'react'
import MemojiHero from '../MemojiHero'
import memoji from '../../assets/images/my-memoji.png'
import { Link } from 'react-router-dom'
import FloatingShapes from '../FloatingShapes'
// import FloatingShapes from 


const Home = () => {
    const nameArray = ['E', 'f', 'f', 'i', ' ', 'E', 'm', 'm', 'a', 'n', 'u', 'e', 'l']

    return (
        <>
            <div className='main-content home'>
                <MemojiHero
                    memoji={memoji}
                    title={nameArray}
                    description='MERN stack Web Developer exploring the blockchain, Solidity and
                Full stack Web 3 development with javascript'
                />

                <div className='cta'>
                    <Link to='/about' className='cta-links learn'>Learn more</Link>
                    <Link to='/contact' className='cta-links hire'>Hire me</Link>
                </div>
{/* 
                <div className='home social d-flex justify-content-between my-4'>
                    <a href='https://www.linkedin.com/in/emmanuel-effi/'>LinkedIn</a>
                    <a href='https://github.com/EffiEmmanuel'>Github</a>
                    <a href='https://twitter.com/effi_dev'>Twitter</a>
                </div> */}

            </div>

            <FloatingShapes />

        </>
    )
}

export default Home