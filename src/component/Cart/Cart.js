import React from 'react';
import CartSingle from '../CartSingle/CartSingle';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <div className="cart">
      <h3 className="title">Selected Items</h3>
      <div className="order-summary">
        {
          cart.map(singleBookItem => <CartSingle singleBook={singleBookItem}></CartSingle>) 
        }
        
      </div>
    </div>
        </div>
    );
};

export default Cart;