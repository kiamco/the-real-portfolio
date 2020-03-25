import React from 'react';
import resume from '../data/resume-kim.docx'

const Header = () => {
    return(
        <div className="header-container">
            <h1>
                <span className='blue'>Kim Kiamco</span> is a 
                <span className="purple"> full-stack developer</span>,
                 who has a diverse skill set ranging from  
                 <span className="orange"> design</span>, to 
                 <span className="orange"> HTML/CSS </span> +  
                 <span className="orange"> JavaScript</span> + 
                 <span className="orange"> React</span> + 
                 <span className="orange"> Nodejs</span>, 
                all the way to 
                <span className="turquoise"> analytics</span>  using 
                <span className="green"> Splunk </span>and various monitoring tools.
            </h1>
            <a href={resume} download="Kim Kiamco's resume">

            <button>Checkout my resume</button>
            </a>
        </div>
    )
}

export default Header;