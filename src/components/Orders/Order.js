import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {
    const {Products,  initialCart}=useLoaderData();
    const [cart,setcart]=useState(initialCart);
    return (
        <div>
    <h1>this is ordder section: {Products.length}</h1>
    <h2>previous cart: {cart.length}</h2>
    <Cart cart={cart}></Cart>
        </div>
    );
};

export default Order;