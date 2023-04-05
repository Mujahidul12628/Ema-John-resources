import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, seller, quantity, price, img } = props.product;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;