import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            {(toggleMenu || width > 500) &&
                <ul className='liste'>
                    <li className='items'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">Accueil</Link>
                    </li>
                    <li className='items'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/write">Ecrire</Link>
                    </li>
                    <li className='items'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/contact">Contact</Link>
                    </li>
                </ul>}
            <button onClick={toggleNav} className='btn'>BTN</button>
        </nav>
    )
}

export default Navbar