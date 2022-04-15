import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // নিচের চিল্ডেন হচ্ছে একটা বাটন। যা অর্ডার কম্পোনেন্ট থেকে এসেছে।
    const { cart, children } = props;
    // console.log(props.children);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>

            {/* এখানে চিল্ডেন হচ্ছে বাটন */}
            {children}
        </div>
    );
};

export default Cart;