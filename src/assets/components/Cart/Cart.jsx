import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = (props.cart)
    const { cart } = (props);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const totalTax = (totalPrice * 7) / 100;

    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
            <h3>Ordered Item</h3>
            <hr />
            <p>Selected Item: {quantity} </p>
            <p>Total Price: ${totalPrice.toFixed(2)} </p>
            <p>Total Shipping: ${totalShipping.toFixed(2)} </p>
            <p>Total Tax: ${totalTax.toFixed(2)} </p>
            <hr />
            <h4>Grand Total ${grandTotal.toFixed(2)} </h4>
            <span></span>
        </div>
    );
};

export default Cart;