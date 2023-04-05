import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const [cart, setCart] = useState([])

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        console.log(newCart)
    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(product => {
                        return <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>
                    })
                }
            </div>
            <div className="cart-container">
                <h1>Cart {cart.length}  </h1>
            </div>


        </div>
    );
};

export default Shop;