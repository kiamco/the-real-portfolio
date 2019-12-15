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
                    <img src={twitter} alt="" />
                    <a href="https://twitter.com/KiamcoKim">  Twitter</a>
                </div>
                <div className="social-icon">
                    <img src={linkedin} alt=""/>
                    <a href="https://www.linkedin.com/in/kim-kiamco-bab1a4107/">Linkedin</a>
                </div>
                <div className="social-icon">
                    <img src={github} alt="" />
                    <a href="https://github.com/kiamco">Github</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;