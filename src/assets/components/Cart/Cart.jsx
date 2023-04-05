import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = (props.cart)
    const { cart } = (props);

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const totalTax = (totalPrice * 7) / 100;

    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
            <h3>Order Cart</h3>
            <hr />
            <p>Selected Item: {cart.length} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: {totalShipping} Day </p>
            <p>Total Tax: ${totalTax} </p>
            <hr />
            <h4>Grand Total ${grandTotal} </h4>
            <span></span>
        </div>
    );
};

export default Cart;