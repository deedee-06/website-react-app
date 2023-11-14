import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                AI Movement
            </div>
            <ul className='navbar-menu'>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/blog'>Blog</Link></li>
                <li><Link to ='/about'>About</Link></li>

            </ul>
        </div>
    )
}

export default Navbar