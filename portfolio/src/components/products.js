import React from 'react';
import Rocket from '../img/startup.png'
import Item from './productItem';
import {product} from '../data/homeContent';

const Products = ({header,content,logo}) => {
    return (
        <div className="products-container">
            <div className="products-header">
                <h1> <span> {header}  </span> </h1>
                <img src={logo || ''} alt="" />
            </div>
            
            {content.map(item => <Item productName={item.product} description={item.description} image={item.image} />)}
        </div>
        
    )
}

export default Products;