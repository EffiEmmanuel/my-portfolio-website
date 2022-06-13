import './index.css'
import React, { useEffect, useState } from 'react'
import polygon from '../../assets/images/Polygon 1.png'
import boxedDots from '../../assets/images/Boxed dot.png'
import boxesOverlay from '../../assets/images/boxesoverlay.png'

function FloatingShapes() {
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
            <img src={boxedDots} alt='polygon' className={`object ${boxedDotsClass}`} />
            <img src={boxesOverlay} alt='polygon' className={`object ${boxesOverlayClass}`} />
        </>
    )
}

export default FloatingShapes