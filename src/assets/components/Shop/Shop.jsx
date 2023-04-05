import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

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
                {
                    products.map(product => {
                        return <Product
                            key={product.id}
                            product={product}
                        ></Product>
                    })
                }
            </div>
            <div className="cart-container">
                <h1>Cart container</h1>
            </div>


        </div>
    );
};

export default Shop;