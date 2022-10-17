import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { Children } from 'react';
import "./Cart.css"
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart, clearCart, children } = props

    let price = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product)
        price = price + product.price * product.quantity
        shippingCharge = shippingCharge + product.shipping
        quantity = quantity + product.quantity

    }
    const tax = parseFloat((price * 0.1).toFixed(2))
    const grandTotal = price + shippingCharge + tax;

    return (
        <div className='cart-info'>
            <h1 className='cart-title'>Order Summary</h1>
            <p>Selected Items {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
            <div>
                {children}
                {/* <button className='clear-btn' onClick={clearCart}>Clear Items <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button><br /> */}
            </div>
        </div>
    );
};

export default Cart;