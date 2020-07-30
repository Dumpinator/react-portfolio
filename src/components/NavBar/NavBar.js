import React from 'react';
import '../NavBar/NavBar.css'

const NavBar = () => {

        return ( 
                <nav>
                        <label htmlFor="menu-mobile" className="menu-mobile">Menu</label>
                        <input type="checkbox" id="menu-mobile" role="button" />
                                <ul>
                                        <li className="menu m-home"><a href="#index.html">Portfolio</a></li>
                                        <li className="menu m-about"><a href="#about">About</a></li>
                                        <li className="menu m-contact"><a href="#contact">Contact</a></li>
                                </ul>
                </nav>
        )
}

export default NavBar;