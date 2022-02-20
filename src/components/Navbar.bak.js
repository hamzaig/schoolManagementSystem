import React from 'react'
import Classes from './navbar.module.css'
import logo from '../assets/images/icon.ico'
const Navbar = () => {
    return (
        <>
            <div className={Classes.mainNav}>
                <ul className={Classes.navItem}>
                    <img className={Classes.icon} src={logo} alt=""/>
                    <li><a href="http://#">Pricing</a></li>
                    <li><a href="http://#">Home</a></li>
                    <li><a href="http://#">About Us</a></li>
                    <li><a href="http://#">Login</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar