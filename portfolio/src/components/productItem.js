import React from 'react';
import Directory from '../img/folder.png';
import placeholder from '../img/settings.png'

const ProductItem = ({productName, description, image, url}) => {
    console.log(url)
    return(
        <div className='item' onClick={()=> window.location = url}>
            <div className="left">
                <div className="title">
                    <img src={Directory} alt=""/>
                    <h1>{productName}</h1>
                </div>
                <p>{description}</p>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={image || placeholder} alt="" />
                </div>
            </div>

        </div>
    )
}

export default ProductItem;