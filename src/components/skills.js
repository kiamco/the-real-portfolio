import React from 'react';


const Skills = ({header, logo}) => {
    return(
    <div className="products-container">
        <div className="products-header">
            <h1> <span> {header}  </span> </h1>
            <img src={logo || ''} alt="" />
        </div>
        
        <ul class="skills">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Express</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>LESS</li>
            <li>ElasticSearch</li>
            <li>Python</li>
            <li>Bash</li>
            <li>Git</li>
            <li>Linux</li>
            <li>Terraform</li>
            <li>AWS</li>
            <li>Splunk</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
        </ul>
        
    </div>
    )

}

export default Skills;