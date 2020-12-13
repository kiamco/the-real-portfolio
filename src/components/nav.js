import React from 'react';
import logo from '../img/programmer.png';
import twitter from '../img/socialIcons/twitter.png';
import linkedin from '../img/socialIcons/linkedin.png';
import github from '../img/socialIcons/github.png';

const Nav = (props) => {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='links'>
                <div className='social-icon'>
                    <a href="https://twitter.com/KiamcoKim">
                    <img src={twitter} alt="twitter" />
                    </a>
                </div>
                <div className="social-icon">
                    
                    <a href="https://www.linkedin.com/in/kim-kiamco-bab1a4107/">
                    <img src={linkedin} alt="linkedin"/>
                    </a>
                </div>
                <div className="social-icon">
                    
                    <a href="https://github.com/kiamco"><img src={github} alt="github" /></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;