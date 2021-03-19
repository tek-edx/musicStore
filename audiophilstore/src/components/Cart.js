import React,{useState} from 'react';
import styled from 'styled-components';
import "../css/cartIcon.css";
import CartIcon from './CartIcon';
import {useGlobalContext} from '../context'

import { RiArrowUpSLine, RiArrowDownSLine  } from "react-icons/ri";

function Cart() {

   

    const { increaseItemNumber, decreaseItemNumber,itemNumber,removeItem,cartItems} = useGlobalContext();
    

   


   
      
    return (
        <CartStyle>
            <div style={{
               
                display: 'flex',
                justifyContent: 'flex-end',
                height: '50px',
                marginRight: '10px',
        }} >
            <CartIcon />
            </div>

           
        <div>


           
    
        
            {
            cartItems.map((item,index) => {
                const { id,image, name, price,amount} = item;
                return (
                    <div className="cart-grid" key={index}>
                <div className="cart-image">
                    <img src={image} alt=""/>
                </div>
                <div className="cartItem-description">
                <h3>{name}</h3>
                <h4>{price}</h4>
                 <button onClick={() =>  {removeItem(id)}}>Remove Item</button>
               </div>

                        <div className="amount" >
                            <div className="number increase">
                                <RiArrowUpSLine
                                
                                onClick = {() => {
                                increaseItemNumber(id)
                                }}
                                /></div>
                   {amount}
                   <div className="number decrease">
                                    <RiArrowDownSLine

                                    onClick={() => {
                                        decreaseItemNumber(id)
                                    }}
                                 /></div>
               </div>

               <div className="total item-amount">
                   100
               </div>
            
            <div className="payment-display">
                This is payment displayloream epsom sdfdsfsdfds
                dfdsfdsfds
                dsfdsfdsf
                sdfdsfds

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
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
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

.amount{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.payment-display{
    width: 80%;
     grid-area: 5 / 1 /6 /4
    border: solid red 1px;
}



`

export default Cart
