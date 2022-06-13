import './index.css'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import myLogo from '../../assets/images/my-logo.png'
import closeButton from '../../assets/images/close menu.png'
import openButton from '../../assets/images/openmenu.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={myLogo} alt='Logo' />
            </Link>

            <nav className='desktop'>
                <Link to='/about'>ABOUT ME</Link>
                <Link to='/projects'>PROJECTS</Link>
                <Link to='/skills'>SKILLS</Link>
                <Link to='/contact'>CONTACT ME</Link>
            </nav>

            <img src={openButton} alt='open menu' style={{ width: '25px' }} className='openButton' onClick={() => toggleMenu()} />

            {isMenuOpen &&
                <nav id='mobile-nav'>
                    <img src={closeButton} className='closeButton' alt='Close menu' style={{ width: '25px' }} onClick={() => toggleMenu()} />
                    <Link to='/about' onClick={() => toggleMenu()}>ABOUT ME</Link>
                    <Link to='/projects' onClick={() => toggleMenu()}>PROJECTS</Link>
                    <Link to='/skills' onClick={() => toggleMenu()}>SKILLS</Link>
                    <Link to='/contact' onClick={() => toggleMenu()}>CONTACT ME</Link>
                </nav>
            }


        </div>
    )
}

export default Navbar