import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const {Products,  initialCart}=useLoaderData();
    return (
        <div>
    <h1>this is ordder section: {Products.length}</h1>
    <h2>previous cart: {initialCart.length}</h2>
        </div>
    );
};

export default Order;