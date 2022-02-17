import React from 'react'
import Classes from './navbar.module.css'
import logo from '../assets/images/icon.ico'
const Navbar = () => {
    return (
        <>
            <div className={Classes.mainNav}>
            <div>
                <img className={Classes.logo} src={logo} alt="Logo" />
            </div>
            <nav className={Classes.navItem}>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li className={Classes.login}>Login</li>
            </nav>
            </div>
        </>

    )
}

export default Navbar