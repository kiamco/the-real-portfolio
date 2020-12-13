import React from 'react';
import resume from '../data/kim_kiamco_resume_v5-converted.pdf'

const Header = () => {
    return(
        <div className="header-container">
            <h1>
                Hello 👋, I am 
                <span className='blue'> Kim Kiamco </span> 
                a 
                <span class="orange"> full stack web developer  </span> 
                who is 
                <span class="purple"> passionate </span>about turning ideas 
                into 
                <span class="green"> web applications </span> 
                
                
            </h1>
             
            <p class="contact">Get in touch 📭 <a href="mailto:kiamcoo@gmail.com">kiamcoo@gmail.com </a> </p>
            <a href={resume} download="Kim Kiamco's resume">

            <button>Checkout my resume</button>
            
            </a>
        </div>
    )
}

export default Header;