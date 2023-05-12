import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';
import DynamicTittle from '../Hook/DynamicTitle';

const Orders = () => {
    DynamicTittle("Order");

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const reamain = cart.filter(product => product.id !== id)
        setCart(reamain);
        removeFromDb(id);
        console.log(id)
    }
    console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className="review-container">

                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="car-container">
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Orders;