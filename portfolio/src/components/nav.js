import React from 'react';
import logo from '../img/programmer.png';


const Nav = (props) => {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='links'>
                <a href="https://twitter.com/KiamcoKim">Twitter</a>
                <a href="https://www.linkedin.com/in/kim-kiamco-bab1a4107/">Linkedin</a>
                <a href="https://github.com/kiamco">Github</a>
            </div>
        </nav>
    )
}

export default Nav;