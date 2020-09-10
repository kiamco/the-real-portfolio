import React from 'react';
import Directory from '../img/folder.png';
import placeholder from '../img/settings.png'

const ProductItem = ({ productName, description, image, url, stack }) => {
    return (
        <div className='item' onClick={() => window.location = url}>
            <div className="left">
                <div className="title">
                    <img src={Directory} alt="" />
                    <h1>{productName} </h1>
                </div>
                <p>{description}</p>
                <p class="stack">Tech Stack: {stack}</p>
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