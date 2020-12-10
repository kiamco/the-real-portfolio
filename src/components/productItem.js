import React from 'react';
import Directory from '../img/folder.png';
import placeholder from '../img/settings.png'

const ProductItem = ({ productName, description, image, url, stack, github }) => {
    return (
        <div className='item' >
            <div className="left">
                <div className="title">
                    <img src={Directory} alt="" />
                    <h1 onClick={() => window.location = url}>{productName} </h1>
                </div>
                <p>{description}</p>
                {github ? <p className="stack">Github: <span className="link-hover" onClick={() => window.location = github} >{github}</span></p> : ""}
                
                <p className="stack">Tech Stack: {stack}</p>
            </div>
            <div className="right" style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="img-container"  >
                </div>
            </div>

        </div>
    )
}

export default ProductItem;