import './index.css'
import React from 'react'
import MemojiHero from '../MemojiHero'
import memoji from '../../assets/images/memoji-about.png'

const About = () => {
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
    return (
        <div className='main-content about'>
            <MemojiHero
                memoji={memoji}
                title={aboutArray}
                description="I’m a 19 year old Fullstack Javascript web developer from Lagos, Nigeria. I started building websites in 2017 (HTML, CSS, Vanilla JavaScript)
                In 2021, I made a transition into full stack development with PHP, MySQL and also, with Nodejs, Express and MongoDB. I have been priviledged
                to work in amazing teams to build beautiful, scalable and efficient web applications. I’ve worked on a handful of projects ranging from e-commerce 
                stores to restaurant web applications, hospital management systems and NFT web applications.
                I recently developed a strong passion for blockchain development and currently, I'm actively learning about the blockchain, solidity, Web3
                and full stack Javascript development.
                Apart from being a developer, I enjoy playing the piano and hanging out with my best friend, Olasubomi.
                "
            />
        </div>
    )
}

export default About