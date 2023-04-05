import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>

            <div className="product-container">
                <h1>Product container</h1>
            </div>
            <div className="cart-container">
                <h1>Cart container</h1>
            </div>
            {
                products.map(product => {
                    return <li>{product.category}
                    </li>
                })
            }

        </div>
    );
};

export default Shop;