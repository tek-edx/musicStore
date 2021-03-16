import React from 'react';
import styled from 'styled-components';

function Cart() {
    let cartItems = JSON.parse(localStorage.getItem('cartList')) ;
    
    return (
        <CartStyle>
        <div>
            <div>Cart Items</div>
            {
            cartItems.map((item) => {
                const {image,name,price} = item;
                return (
                <div className="cart-grid">
                <div className="cart-image">
                    <img src={image} alt=""/>
                </div>
                <div className="cartItem-description">
                <h3>{name}</h3>
                <h4>{price}</h4>
                </div>
            </div>)
            })
            }
        
        </div>
        </CartStyle>
    )
}

const CartStyle = styled.div`


.cart-grid {
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 120px;
    justify-items: center;
    align-items: center;
    margin: 1rem;
    background-color: whitesmoke;
    
}


.cart-image{

    height: 100px;
    width: 100px;
    
    
    
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

    }
}

.cartItem-description{

  
    justify-self: start;

}






`

export default Cart
