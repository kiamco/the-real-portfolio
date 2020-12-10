import React from 'react';
import Item from './productItem';

const Products = ({ header, content, logo }) => {
    
    return (
        <div className="products-container">
            <div className="products-header">
                <h1> <span> {header}  </span> </h1>
                <img src={logo || ''} alt="" />
            </div>

            {content.map(item => {
                return(
                    <Item
                        productName={item.product}
                        description={item.description}
                        image={item.image}
                        url={item.url}
                        stack={item.stack} />
                )
            })
        }
            
        </div>

    )
}

export default Products;