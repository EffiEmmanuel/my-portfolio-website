import './index.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Skills from '../Skills'
import Contact from '../Contact'
import polygon from '../../assets/images/Polygon 1.png'
import boxedDots from '../../assets/images/Boxed dot.png'
import boxesOverlay from '../../assets/images/boxesoverlay.png'
import { Route, Routes } from 'react-router-dom'

const Layout = () => {
    const [polygonClass, setPolygonClass] = useState('polygon')
    const [boxedDotsClass, setBoxedDotsClass] = useState('boxed-dots')
    const [boxesOverlayClass, setBoxesOverlayClass] = useState('boxes-overlay')

    useEffect(() => {
        setTimeout(() => {
            setPolygonClass('polygon-animate')
            setBoxedDotsClass('boxed-dots-animate')
            setBoxesOverlayClass('boxes-overlay-animate')
        }, 4000)
    }, [window.location.pathname])


    return (
        <>
            <Navbar />

            <main className='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                {/* <Home /> */}
                {/* <img src={polygon} alt='polygon' className={`object ${polygonClass}`} /> */}
                {/* <img src={boxedDots} alt='polygon' className={`object ${boxedDotsClass}`} />
                <img src={boxesOverlay} alt='polygon' className={`object ${boxesOverlayClass}`} /> */}

            </main>
        </>
    )
}
export default Layout