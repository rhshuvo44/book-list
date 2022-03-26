import React from 'react';
import './CartSingle.css'

const CartSingle = (props) => {
    const {name,image} =props.singleBook
    console.log(name);
    return (
        <div className='cart-single'>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CartSingle;